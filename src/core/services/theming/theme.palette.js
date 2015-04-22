(function() {
'use strict';

angular.module('material.core.theming.palette', [])
.constant('$mdColorPalette', {
    'red': {
    '50': '#ffebee',
    '100': '#ffcdd2',
    '200': '#ef9a9a',
    '300': '#e57373',
    '400': '#ef5350',
    '500': '#f44336',
    '600': '#e53935',
    '700': '#d32f2f',
    '800': '#c62828',
    '900': '#b71c1c',
    'A100': '#ff8a80',
    'A200': '#ff5252',
    'A400': '#ff1744',
    'A700': '#d50000',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700'
  },
  'pink': {
    '50': '#fce4ec',
    '100': '#f8bbd0',
    '200': '#f48fb1',
    '300': '#f06292',
    '400': '#ec407a',
    '500': '#e91e63',
    '600': '#d81b60',
    '700': '#c2185b',
    '800': '#ad1457',
    '900': '#880e4f',
    'A100': '#ff80ab',
    'A200': '#ff4081',
    'A400': '#f50057',
    'A700': '#c51162',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 A200 A400 A700'
  },
  'purple': {
    '50': '#f3e5f5',
    '100': '#e1bee7',
    '200': '#ce93d8',
    '300': '#ba68c8',
    '400': '#ab47bc',
    '500': '#9c27b0',
    '600': '#8e24aa',
    '700': '#7b1fa2',
    '800': '#6a1b9a',
    '900': '#4a148c',
    'A100': '#9c27b0',
    'A200': '#9c27b0',
    'A400': '#9c27b0',
    'A700': '#9c27b0',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 A100',
    'contrastStrongLightColors': '300 400 A200 A400 A700'
  },
  'deep-purple': {
    '50': '#ede7f6',
    '100': '#d1c4e9',
    '200': '#b39ddb',
    '300': '#9575cd',
    '400': '#7e57c2',
    '500': '#673ab7',
    '600': '#5e35b1',
    '700': '#512da8',
    '800': '#4527a0',
    '900': '#311b92',
    'A100': '#b388ff',
    'A200': '#7c4dff',
    'A400': '#651fff',
    'A700': '#6200ea',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 A100',
    'contrastStrongLightColors': '300 400 A200'
  },
  'indigo': {
    '50': '#e8eaf6',
    '100': '#c5cae9',
    '200': '#9fa8da',
    '300': '#7986cb',
    '400': '#5c6bc0',
    '500': '#3f51b5',
    '600': '#3949ab',
    '700': '#303f9f',
    '800': '#283593',
    '900': '#1a237e',
    'A100': '#8c9eff',
    'A200': '#536dfe',
    'A400': '#3d5afe',
    'A700': '#304ffe',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 A100',
    'contrastStrongLightColors': '300 400 A200 A400'
  },
  'blue': {
    '50': '#e3f2fd',
    '100': '#bbdefb',
    '200': '#90caf9',
    '300': '#64b5f6',
    '400': '#42a5f5',
    '500': '#2196f3',
    '600': '#1e88e5',
    '700': '#1976d2',
    '800': '#1565c0',
    '900': '#0d47a1',
    'A100': '#82b1ff',
    'A200': '#448aff',
    'A400': '#2979ff',
    'A700': '#2962ff',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700'
  },
  'light-blue': {
    '50': '#e1f5fe',
    '100': '#b3e5fc',
    '200': '#81d4fa',
    '300': '#4fc3f7',
    '400': '#29b6f6',
    '500': '#03a9f4',
    '600': '#039be5',
    '700': '#0288d1',
    '800': '#0277bd',
    '900': '#01579b',
    'A100': '#80d8ff',
    'A200': '#40c4ff',
    'A400': '#00b0ff',
    'A700': '#0091ea',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '500 600 700 800 900 A700',
    'contrastStrongLightColors': '500 600 700 800 A700'
  },
  'cyan': {
    '50': '#e0f7fa',
    '100': '#b2ebf2',
    '200': '#80deea',
    '300': '#4dd0e1',
    '400': '#26c6da',
    '500': '#00bcd4',
    '600': '#00acc1',
    '700': '#0097a7',
    '800': '#00838f',
    '900': '#006064',
    'A100': '#84ffff',
    'A200': '#18ffff',
    'A400': '#00e5ff',
    'A700': '#00b8d4',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '500 600 700 800 900',
    'contrastStrongLightColors': '500 600 700 800'
  },
  'teal': {
    '50': '#e0f2f1',
    '100': '#b2dfdb',
    '200': '#80cbc4',
    '300': '#4db6ac',
    '400': '#26a69a',
    '500': '#009688',
    '600': '#00897b',
    '700': '#00796b',
    '800': '#00695c',
    '900': '#004d40',
    'A100': '#a7ffeb',
    'A200': '#64ffda',
    'A400': '#1de9b6',
    'A700': '#00bfa5',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '500 600 700 800 900',
    'contrastStrongLightColors': '500 600 700'
  },
  'green': {
    '50': '#e8f5e9',
    '100': '#c8e6c9',
    '200': '#a5d6a7',
    '300': '#81c784',
    '400': '#66bb6a',
    '500': '#4caf50',
    '600': '#43a047',
    '700': '#388e3c',
    '800': '#2e7d32',
    '900': '#1b5e20',
    'A100': '#b9f6ca',
    'A200': '#69f0ae',
    'A400': '#00e676',
    'A700': '#00c853',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '500 600 700 800 900',
    'contrastStrongLightColors': '500 600 700'
  },
  'light-green': {
    '50': '#f1f8e9',
    '100': '#dcedc8',
    '200': '#c5e1a5',
    '300': '#aed581',
    '400': '#9ccc65',
    '500': '#8bc34a',
    '600': '#7cb342',
    '700': '#689f38',
    '800': '#558b2f',
    '900': '#33691e',
    'A100': '#ccff90',
    'A200': '#b2ff59',
    'A400': '#76ff03',
    'A700': '#64dd17',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '800 900',
    'contrastStrongLightColors': '800 900'
  },
  'lime': {
    '50': '#f9fbe7',
    '100': '#f0f4c3',
    '200': '#e6ee9c',
    '300': '#dce775',
    '400': '#d4e157',
    '500': '#cddc39',
    '600': '#c0ca33',
    '700': '#afb42b',
    '800': '#9e9d24',
    '900': '#827717',
    'A100': '#f4ff81',
    'A200': '#eeff41',
    'A400': '#c6ff00',
    'A700': '#aeea00',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '900',
    'contrastStrongLightColors': '900'
  },
  'yellow': {
    '50': '#fffde7',
    '100': '#fff9c4',
    '200': '#fff59d',
    '300': '#fff176',
    '400': '#ffee58',
    '500': '#ffeb3b',
    '600': '#fdd835',
    '700': '#fbc02d',
    '800': '#f9a825',
    '900': '#f57f17',
    'A100': '#ffff8d',
    'A200': '#ffff00',
    'A400': '#ffea00',
    'A700': '#ffd600',
    'contrastDefaultColor': 'dark'
  },
  'amber': {
    '50': '#fff8e1',
    '100': '#ffecb3',
    '200': '#ffe082',
    '300': '#ffd54f',
    '400': '#ffca28',
    '500': '#ffc107',
    '600': '#ffb300',
    '700': '#ffa000',
    '800': '#ff8f00',
    '900': '#ff6f00',
    'A100': '#ffe57f',
    'A200': '#ffd740',
    'A400': '#ffc400',
    'A700': '#ffab00',
    'contrastDefaultColor': 'dark'
  },
  'orange': {
    '50': '#fff3e0',
    '100': '#ffe0b2',
    '200': '#ffcc80',
    '300': '#ffb74d',
    '400': '#ffa726',
    '500': '#ff9800',
    '600': '#fb8c00',
    '700': '#f57c00',
    '800': '#ef6c00',
    '900': '#e65100',
    'A100': '#ffd180',
    'A200': '#ffab40',
    'A400': '#ff9100',
    'A700': '#ff6d00',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '800 900',
    'contrastStrongLightColors': '800 900'
  },
  'deep-orange': {
    '50': '#fbe9e7',
    '100': '#ffccbc',
    '200': '#ffab91',
    '300': '#ff8a65',
    '400': '#ff7043',
    '500': '#ff5722',
    '600': '#f4511e',
    '700': '#e64a19',
    '800': '#d84315',
    '900': '#bf360c',
    'A100': '#ff9e80',
    'A200': '#ff6e40',
    'A400': '#ff3d00',
    'A700': '#dd2c00',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300 400 A100 A200',
    'contrastStrongLightColors': '500 600 700 800 900 A400 A700'
  },
  'brown': {
    '50': '#efebe9',
    '100': '#d7ccc8',
    '200': '#bcaaa4',
    '300': '#a1887f',
    '400': '#8d6e63',
    '500': '#795548',
    '600': '#6d4c41',
    '700': '#5d4037',
    '800': '#4e342e',
    '900': '#3e2723',
    'A100': '#d7ccc8',
    'A200': '#bcaaa4',
    'A400': '#8d6e63',
    'A700': '#5d4037',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200',
    'contrastStrongLightColors': '300 400'
  },
  'grey': {
    '0': '#ffffff',
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
    '1000': '#000000',
    'A100': '#ffffff',
    'A200': '#eeeeee',
    'A400': '#bdbdbd',
    'A700': '#616161',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '600 700 800 900'
  },
  'blue-grey': {
    '50': '#eceff1',
    '100': '#cfd8dc',
    '200': '#b0bec5',
    '300': '#90a4ae',
    '400': '#78909c',
    '500': '#607d8b',
    '600': '#546e7a',
    '700': '#455a64',
    '800': '#37474f',
    '900': '#263238',
    'A100': '#cfd8dc',
    'A200': '#b0bec5',
    'A400': '#78909c',
    'A700': '#455a64',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300',
    'contrastStrongLightColors': '400 500'
  },
  'adred': {
    '50': '#ffdee0',
    '100': '#ffb0b6',
    '200': '#ff808a',
    '300': '#ff4c5a',
    '400': '#ff2637',
    '500': '#ff0014',
    '600': '#e80012',
    '700': '#cf0010',
    '800': '#b5000e',
    '900': '#85000a',
    'A100': '#ffb0b6', // Need to update these alternative colors
    'A200': '#ff808a', // Need to update these alternative colors
    'A400': '#ff2637', // Need to update these alternative colors
    'A700': '#cf0010', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },
  'adgrey': {
    '50': '#e8e8e9',
    '100': '#c8c8c9',
    '200': '#a6a7a9',
    '300': '#828386',
    '400': '#67696c',
    '500': '#4d4f53',
    '600': '#46474b',
    '700': '#3e4043',
    '800': '#36383b',
    '900': '#28292b',
    'A100': '#36383b', // Need to update these alternative colors
    'A200': '#28292b', // Need to update these alternative colors
    'A400': '#28292b', // Need to update these alternative colors
    'A700': '#28292b', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },
  'adgreyblue': {
    '50': '#e8e8e9',
    '100': '#c8c8c9',
    '200': '#a6a7a9',
    '300': '#828386',
    '400': '#67696c',
    '500': '#4d4f53',
    '600': '#46474b',
    '700': '#3e4043',
    '800': '#3F51B5',
    '900': '#3949AB',
    'A100': '#303F9F', // Need to update these alternative colors
    'A200': '#283593', // Need to update these alternative colors
    'A400': '#1A237E', // Need to update these alternative colors
    'A700': '#3e4043', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },  
  'adcoolgrey': {
    '50': '#f4f4f4',
    '100': '#e3e4e4',
    '200': '#d3d3d4',
    '300': '#c0c1c2',
    '400': '#b3b4b5',
    '500': '#a6a7a9',
    '600': '#979799',
    '700': '#868789',
    '800': '#767678',
    '900': '#565758',
    'A100': '#e3e4e4', // Need to update these alternative colors
    'A200': '#d3d3d4', // Need to update these alternative colors
    'A400': '#b3b4b5', // Need to update these alternative colors
    'A700': '#868789', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },
  'adyellow': {
    '50': '#fff6e0',
    '100': '#ffe8b5',
    '200': '#ffdb88',
    '300': '#ffcb57',
    '400': '#ffc034',
    '500': '#ffb611',
    '600': '#e8a50f',
    '700': '#cf930d',
    '800': '#b5810c',
    '900': '#855f08',
    'A100': '#ffe8b5', // Need to update these alternative colors
    'A200': '#ffdb88', // Need to update these alternative colors
    'A400': '#ffc034', // Need to update these alternative colors
    'A700': '#cf930d', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },
  'adorange': {
    '50': '#ffe9de',
    '100': '#ffccb0',
    '200': '#ffad80',
    '300': '#ff8b4c',
    '400': '#ff7226',
    '500': '#ff5a00',
    '600': '#e85100',
    '700': '#cf4900',
    '800': '#b53f00',
    '900': '#852f00',
    'A100': '#ffccb0', // Need to update these alternative colors
    'A200': '#ffad80', // Need to update these alternative colors
    'A400': '#ff7226', // Need to update these alternative colors
    'A700': '#cf4900', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },
  'adstone': {
    '50': '#f6f5f0',
    '100': '#e8e7dc',
    '200': '#dad9c6',
    '300': '#cbc9af',
    '400': '#c0bd9e',
    '500': '#b5b28d',
    '600': '#a4a280',
    '700': '#939072',
    '800': '#807e64',
    '900': '#5e5d49',
    'A100': '#e8e7dc', // Need to update these alternative colors
    'A200': '#dad9c6', // Need to update these alternative colors
    'A400': '#c0bd9e', // Need to update these alternative colors
    'A700': '#939072', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },
  'adgreen': {
    '50': '#def2e7',
    '100': '#b0dfc7',
    '200': '#80cca5',
    '300': '#4cb780',
    '400': '#26a865',
    '500': '#00994a',
    '600': '#008b43',
    '700': '#007c3c',
    '800': '#006c34',
    '900': '#005026',
    'A100': '#b0dfc7', // Need to update these alternative colors
    'A200': '#80cca5', // Need to update these alternative colors
    'A400': '#26a865', // Need to update these alternative colors
    'A700': '#007c3c', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },
  'adpurple': {
    '50': '#e9dff0',
    '100': '#cbb4db',
    '200': '#ac87c5',
    '300': '#8955ad',
    '400': '#70319c',
    '500': '#580e8b',
    '600': '#500c7e',
    '700': '#470b70',
    '800': '#3e0962',
    '900': '#2e0748',
    'A100': '#ac87c5', // Need to update these alternative colors
    'A200': '#8955ad', // Need to update these alternative colors
    'A400': '#70319c', // Need to update these alternative colors
    'A700': '#580e8b', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400',
    'contrastStrongLightColors': '500 600 700 A100 A200 A400 A700' // Need to update these alternative colors
  },
  'adblue': {
    '50': '#dee3ed',
    '100': '#b0bdd5',
    '200': '#8096bb',
    '300': '#4c6a9f',
    '400': '#264b8b',
    '500': '#002c77',
    '600': '#00286c',
    '700': '#002360',
    '800': '#001f54',
    '900': '#00173e',
    'A100': '#b0bdd5', // Need to update these alternative colors
    'A200': '#8096bb', // Need to update these alternative colors
    'A400': '#264b8b', // Need to update these alternative colors
    'A700': '#002360', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },
  'admedblue': {
    '50': '#000000',
    '100': '#b0cfeb',
    '200': '#80b2df',
    '300': '#4c92d1',
    '400': '#267bc7',
    '500': '#0064be',
    '600': '#005bac',
    '700': '#00519a',
    '800': '#004787',
    '900': '#003463',
    'A100': '#0099cc', // Need to update these alternative colors
    'A200': '#0099CC', // Need to update these alternative colors
    'A400': '#008BB9', // Need to update these alternative colors
    'A700': '#007CA5', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200',
    'contrastStrongLightColors': '300 400 500 600 700 A100 A200 A400 A700' // Need to update these alternative colors
  },
  'adlightgreen': {
    '50': '#ebf7e3',
    '100': '#cfebbd',
    '200': '#b3de95',
    '300': '#93d06a',
    '400': '#7cc64a',
    '500': '#66bd2b',
    '600': '#5cac27',
    '700': '#529922',
    '800': '#48861e',
    '900': '#356216',
    'A100': '#cfebbd', // Need to update these alternative colors
    'A200': '#b3de95', // Need to update these alternative colors
    'A400': '#7cc64a', // Need to update these alternative colors
    'A700': '#529922', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },
  'adlightpurple': {
    '50': '#f3eaf6',
    '100': '#e1cee8',
    '200': '#cfb0da',
    '300': '#bb8fcb',
    '400': '#ad77c0',
    '500': '#9f60b5',
    '600': '#9057a4',
    '700': '#814e93',
    '800': '#714480',
    '900': '#53325e',
    'A100': '#e1cee8', // Need to update these alternative colors
    'A200': '#cfb0da', // Need to update these alternative colors
    'A400': '#ad77c0', // Need to update these alternative colors
    'A700': '#814e93', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },  
  'adlightblue': {
    '50': '#def4fb',
    '100': '#b1e4f6',
    '200': '#82d4f0',
    '300': '#4ec2e9',
    '400': '#29b5e4',
    '500': '#04a8e0',
    '600': '#0398cb',
    '700': '#0388b6',
    '800': '#02779f',
    '900': '#025775',
    'A100': '#b1e4f6', // Need to update these alternative colors
    'A200': '#82d4f0', // Need to update these alternative colors
    'A400': '#29b5e4', // Need to update these alternative colors
    'A700': '#0388b6', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },
  'adpms300c': {
    '50': '#e31a23', // Pantone Coated 2995 C
    '100': '#f78e1e', // Pantone Coated 2995 C
    '200': '#00a4de', // Pantone Coated 2995 C
    '300': '#54308f', // Pantone Coated 300 C
    '400': '#00a160', // Pantone Coated 300 C
    '500': '#0063cf', // Pantone Coated 300 C
    '600': '#005abc', // Pantone Coated 288 C
    '700': '#0098ce', // Primary Hue 2
    '800': '#ff7043', // Pantone Coated 288 C
    '900': '#cddc39', // Pantone Coated 288 C
    'A100': '#76ff03', // Need to update these alternative colors
    'A200': '#ffcdd2', // Need to update these alternative colors
    'A400': '#64ffda', // Need to update these alternative colors
    'A700': '#bf360c', // Need to update these alternative colors
    'contrastDefaultColor': 'light', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },  
  'adpms300d': {
    '50': '#e31a23', // Pantone Coated 2995 C
    '100': '#f78e1e', // Pantone Coated 2995 C
    '200': '#00a4de', // Pantone Coated 2995 C
    '300': '#54308f', // Pantone Coated 300 C
    '400': '#00a160', // Pantone Coated 300 C
    '500': '#005eb8', // Pantone Coated 300 C
    '600': '#ffcc34', // Pantone Coated 288 C
    '700': '#0099cc', // Pantone Coated 288 C
    '800': '#ff7043', // Pantone Coated 288 C
    '900': '#cddc39', // Pantone Coated 288 C
    'A100': '#0099cc', // Need to update these alternative colors
    'A200': '#5c068c', // Accent Color 1
    'A400': '#64ffda', // Need to update these alternative colors
    'A700': '#bf360c', // Need to update these alternative colors
    'contrastDefaultColor': 'dark', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },
    'adcoolergrey': {
    '50': '#F8F9F9', // Pantone Coated 2995 C
    '100': '#EEEEEF', // Pantone Coated 2995 C
    '200': '#E4E4E5', // Pantone Coated 2995 C
    '300': '#D8D9DA', // Pantone Coated 300 C
    '400': '#CFD0D2', // Pantone Coated 300 C
    '500': '#C8C9CA', // Pantone Coated 300 C
    '600': '#B2B3B3', // Pantone Coated 288 C
    '700': '#9A9B9C', // Pantone Coated 288 C
    '800': '#838484', // Pantone Coated 288 C
    '900': '#5A5B5B', // Pantone Coated 288 C
    'A100': '#838484', // Need to update these alternative colors
    'A200': '#5A5B5B', // Accent Color 1
    'A400': '#E4E4E5', // Need to update these alternative colors
    'A700': '#D8D9DA', // Need to update these alternative colors
    'contrastDefaultColor': 'dark', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  },
    'adblack': {
    '50': '#D7D7D7', // Pantone Coated 2995 C
    '100': '#A1A1A1', // Pantone Coated 2995 C
    '200': '#6D6D6D', // Pantone Coated 2995 C
    '300': '#1C1C1C', // Pantone Coated 300 C
    '400': '#000000', // Pantone Coated 300 C
    '500': '#000000', // Pantone Coated 300 C
    '600': '#000000', // Pantone Coated 288 C
    '700': '#000000', // Pantone Coated 288 C
    '800': '#000000', // Pantone Coated 288 C
    '900': '#000000', // Pantone Coated 288 C
    'A100': '#878A8D', // Need to update these alternative colors
    'A200': '#75787A', // Accent Color 1
    'A400': '#686B6D', // Need to update these alternative colors
    'A700': '#5B5D5F', // Need to update these alternative colors
    'contrastDefaultColor': 'dark', 
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700' // Need to update these alternative colors
  } 

});
})();
