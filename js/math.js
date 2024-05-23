export default {
  toDeg (deg) {
    return deg * (Math.PI / 180)
  },
  toComponents (v0, deg) {
    const vx0 = v0 * Math.cos(deg);
    const vy0 = v0 * Math.sin(deg);
    return { vx0, vy0 }
  },
  maxTime (v0, deg) {
    return ((2*v0)*Math.sin(deg))/(9.81)
  },
  maxHeight (v0, deg) {
    return ((Math.pow(v0, 2)*Math.pow(Math.sin(deg), 2)))/(2*9.81)
  },
  distance (vx0, vy0, t) {
    const x = vx0 * t;
    const y = vy0 * t - 1/2 * (9.81) * t * t;

    return { x, y };
  }
}
