var opts = {
  angle: 0.15, // The span of the gauge arc
  lineWidth: 0.44, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#000000' // Fill color
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  percentColors: [[0.0, "#ADFF2F" ], [0.50, "#f9c802"], [1.0, "#FF4500"]],
  strokeColor: '#DCDCDC',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support
};