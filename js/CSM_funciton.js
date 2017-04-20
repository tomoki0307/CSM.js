const getColorProperty = function(color) {
  let r, g, b, alpha, h, c, v, max, min, minp, maxp, midp;
  if (color.indexOf("rgba") != -1 || color.indexOf("rgb") != -1) {
    let rgbset = color.split("(")[1].split(")")[0].split(",");
    r = +rgbset[0];
    g = +rgbset[1];
    b = +rgbset[2];
    alpha = rgbset[3] === undefined ? 1 : rgbset[3];
  }
  if (color.indexOf("#") != -1) {
    r = parseInt(color.substring(1, 3), 16);
    g = parseInt(color.substring(3, 5), 16);
    b = parseInt(color.substring(5, 7), 16);
    alpha = 1;
  }
  if (r <= g && r <= b) {
    min = r;
    minp = "r";
  } else if (b <= g) {
    min = b;
    minp = "b";
  } else {
    min = g;
    minp = "g";
  }
  if (r == g && r == b) {
    max = min;
    h = 0;
  } else if (r >= g && r >= b) {
    max = r;
    maxp = "r"
    h = 60 * ((g - b) / (max - min));
  } else if (b >= g) {
    max = b;
    maxp = "b"
    h = (60 * ((r - g) / (max - min))) + 240;
  } else {
    max = g;
    maxp = "g"
    h = (60 * ((b - r) / (max - min))) + 120;
  }
  if ((max == r && min == g) || (max == g && min == r)) {
    midp = "b";
  } else if ((max == g && min == b) || (max == b && min == g)) {
    midp = "r";
  } else {
    midp = "g";
  }
  // if (((r == g || r == b) && max == r) || ((g == r || g == b) && max == g)) {
  //     midp = "n";
  // }
  if ((r == g && (minp == "r" || maxp == "r")) || (b == g && (minp == "b" || maxp == "b"))) {
    midp = "g";
  }
  if ((g == r && (minp == "g" || maxp == "g")) || (b == r && (minp == "b" || maxp == "b"))) {
    midp = "r";
  }
  if ((r == b && (minp == "r" || maxp == "r")) || (g == b && (minp == "g" || maxp == "g"))) {
    midp = "b";
  }
  if (h < 0) {
    h += 360;
  }
  h = h
  s = 255 * ((max - min) / max)
  v = max
  return {
    h: h,
    s: s,
    v: v,
    a: alpha,
    r: r,
    g: g,
    b: b,
    min: min,
    max: max,
    minp: minp,
    maxp: maxp,
    midp: midp
  }
}

let csm = {}
csm.randomSet = function(boolen) {
    let property = [];
    for (var i in csmSet) {
        property.push(i);
    }
    let num = Math.floor(Math.random() * (property.length - 1));
    if (boolen == true) {
        console.log(property[num])
    }
    return csmSet[property[num]];
}
csm.alpha = function(color,alpha) {
    if (alpha < 0 && alpha > 1) {
        return 0
    }
    let set = []
    let colorSet =color
    Object.keys(colorSet).forEach(function(i){
      if (colorSet[i].indexOf("rgba") != -1 || colorSet[i].indexOf("rgb") != -1) {
          let rgbset = colorSet[i].split("(")[1].split(")")[0].split(",");
          set[i] = "rgba(" + rgbset[0] + "," + rgbset[1] + "," + rgbset[2] + "," + alpha + ")";
      } else if (colorSet[i].indexOf("#") != -1) {
          set[i] = "rgba(" + parseInt(colorSet[i].substring(1, 3), 16) + "," + parseInt(colorSet[i].substring(3, 5), 16) + "," + parseInt(colorSet[i].substring(5, 7), 16) + "," + alpha + ")";
      } else {
          set[i] = colorSet[i];
      }
    })
    return set;
  }
csm.hue = function(color, i) {
    let num = i === undefined ? 12 : i;
    let r, g, b, alpha, max, min, h;
    let result = [];
    result.push(color);
    let cp = getColorProperty(color)
    for (let i = 0; i < num - 1; i++) {
        cp.h += (360 / num);
        let rx, gx, bx;
        if (cp.h > 360) {
            cp.h -= 360
        }
        if (cp.h >= 0 && cp.h < 60) {
            rx = cp.max;
            gx = (cp.h / 60) * (cp.max - cp.min) + cp.min;
            bx = cp.min;
        }
        if (cp.h >= 60 && cp.h < 120) {
            rx = ((120 - cp.h) / 60) * (cp.max - cp.min) + cp.min;
            gx = cp.max;
            bx = cp.min;
        }
        if (cp.h >= 120 && cp.h < 180) {
            rx = cp.min;
            gx = cp.max;
            bx = ((cp.h - 120) / 60) * (cp.max - cp.min) + cp.min;
        }
        if (cp.h >= 180 && cp.h < 240) {
            rx = cp.min;
            gx = ((240 - cp.h) / 60) * (cp.max - cp.min) + cp.min;
            bx = cp.max;
        }
        if (cp.h >= 240 && cp.h < 300) {
            rx = ((cp.h - 240) / 60) * (cp.max - cp.min) + cp.min;
            gx = cp.min;
            bx = cp.max;
        }
        if (cp.h >= 300 && cp.h < 360) {
            rx = cp.max;
            gx = cp.min;
            bx = ((360 - cp.h) / 60) * (cp.max - cp.min) + cp.min;
        }
        rx = Math.round(rx)
        gx = Math.round(gx)
        bx = Math.round(bx)
        result.push("rgba(" + rx + "," + gx + "," + bx + "," + cp.a + ")")
    }
    return result;
}
csm.saturation = function(color, i) {
    let num = i === undefined ? 10 : i;
    let result = [];
    result.push(color);
    let cp = getColorProperty(color);
    let cpn = {
        r: cp.r,
        g: cp.g,
        b: cp.b,
    }
    let checkMid = cpn[cp.midp];
    let sflag = 0;
    let margin = (((cp.max - cp.min) / cp.max) * num);
    let midPlus = (cp.max - cpn[cp.midp]) / margin;
    let startMid = cpn[cp.midp] - ((num - margin) * midPlus);
    for (let i = 1; i < num; i++) {
        if (cpn[cp.minp] + (cp.max / num) > cp.max) {
            sflag = i
        }
        cpn[cp.minp] += cpn[cp.minp] + (cp.max / num) > cp.max ? (cp.max / num) - cp.max : (cp.max / num);
        if (checkMid != cpn[cp.maxp]) {
            cpn[cp.midp] += cpn[cp.midp] + midPlus > cp.max ? midPlus - cp.max + startMid : midPlus;
        }
        result.push("rgba(" + Math.round(cpn.r) + "," + Math.round(cpn.g) + "," + Math.round(cpn.b) + "," + cp.a + ")")
    }
    if (sflag != 0) {
        for (let i = 0; i < sflag; i++) {
            let tmp = result.shift();
            result.push(tmp);
        }
    }
    return result;
}
csm.value = function(color, i) {
    let num = i === undefined ? 10 : i;
    let result = [];
    result.push(color);
    let cp = getColorProperty(color);
    let cpn = {
        r: cp.r,
        g: cp.g,
        b: cp.b,
    }
    let sflag = 0
    let margin = cp.max / (255 / num);
    let midMinus = cpn[cp.midp] / margin;
    let minMinus = cpn[cp.minp] / margin;
    let startMid = cpn[cp.midp] + ((num - margin) * midMinus);
    let startMin = cpn[cp.minp] + ((num - margin) * minMinus);
    for (let i = 1; i < num; i++) {
        if (cpn[cp.maxp] + (255 / num) < 0) {
            sflag = i
        }
        cpn[cp.maxp] -= cpn[cp.maxp] - (255 / num) < 0 ? (255 / num) - 255 : (255 / num);
        cpn[cp.minp] -= cpn[cp.minp] - minMinus < 0 ? minMinus - startMin : minMinus;
        cpn[cp.midp] -= cpn[cp.midp] - midMinus < 0 ? midMinus - startMid : midMinus;
        result.push("rgba(" + Math.round(cpn.r) + "," + Math.round(cpn.g) + "," + Math.round(cpn.b) + "," + cp.a + ")")
    }
    if (sflag != 0) {
        for (let i = 0; i < sflag; i++) {
            let tmp = result.shift();
            result.push(tmp);
        }
    }
    return result;
}

csm.gradation = function(color1, color2, i) {
    let num = i === undefined ? 10 : i - 2;
    let result = [];
    result.push(color1);
    let cp1 = getColorProperty(color1);
    let cp2 = getColorProperty(color2);
    let cpn = {
        r: cp1.r,
        g: cp1.g,
        b: cp1.b,
        a: cp1.a
    }
    let margin = {
        r: (cp1.r - cp2.r) / num,
        g: (cp1.g - cp2.g) / num,
        b: (cp1.b - cp2.b) / num,
        a: (cp1.a - cp2.a) / num,
    }
    for (let i = 0; i < num; i++) {
        cpn.r -= margin.r;
        cpn.g -= margin.g;
        cpn.b -= margin.b;
        cpn.a -= margin.a;
        result.push("rgba(" + Math.round(cpn.r) + "," + Math.round(cpn.g) + "," + Math.round(cpn.b) + "," + cpn.a + ")");
    }
    result.push(color2);
    return result;
}
csm.scale = function(color1,color2,array,max,min){
  max = max === undefined ? 100 : max;
  min = min === undefined ? 0 : min;
  let result = [];
  let cp1 = getColorProperty(color1);
  let cp2 = getColorProperty(color2);
  return max
}
var array = [10,20,30,40,50,60,70,80,90,100];
console.log(csm.scale(csmSet.chart[0],csmSet.chart[1],array))
csm.analogyR = function(color) {
    return csm.hue(color)[1]
}
csm.analogyL = function(color) {
    return csm.hue(color)[11]
}
csm.intermediateR = function(color) {
    return csm.hue(color)[3];
}
csm.intermediateL = function(color) {
    return csm.hue(color)[9];
}
csm.complementary = function(color) {
    return csm.hue(color)[6];
}
csm.opornentR1 = function(color) {
    return csm.hue(color)[4];
}
csm.opornentR2 = function(color) {
    return csm.hue(color)[5];
}
csm.opornentL1 = function(color) {
    return csm.hue(color)[8];
}
csm.opornentL2 = function(color) {
    return csm.hue(color)[7];
}
csm.splitComplementary = function(color) {
    let set = [
        color, csm.hue(color)[5], csm.hue(color)[7]
    ];
    return set;
}
csm.triad = function(color) {
    return csm.hue(color, 3);
}
csm.tetrad = function(color) {
    return csm.hue(color, 4);
}
csm.pentad = function(color) {
    return csm.hue(color, 5);
}
csm.pentad2 = function(color) {
    let cp = getColorProperty(color)
    let set = [
        color, "rgba(255,255,255," + cp.a + ")", csm.hue(color, 3)[1], "rgba(0,0,0," + cp.a + ")", csm.hue(color, 3)[2]
    ];
    return set;
}
csm.hexad = function(color) {
    return csm.hue(color, 6);
}
csm.hexad2 = function(color) {
    let cp = getColorProperty(color);
    let set = [
        color, csm.hue(color, 4)[1], "rgba(255,255,255," + cp.a + ")", csm.hue(color, 4)[2], csm.hue(color, 4)[3], "rgba(0,0,0," + cp.a + ")"
    ];
    return set;
}
