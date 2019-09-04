const cssData=[{
  title:'元素选择符',
  title_en:"Element Selectors",
  color:'#ffce54',
  list:[{
    item:'*',
    intro:'在CSS中,一个星号(*)就是一个通配选择器.它可以匹配任意类型的HTML元素',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors'
  },{
    item:'E',
    intro:'CSS元素选择器(也称为类型选择器)通过node节点名称匹配元素',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Type_selectors'
  },{
    item:'#id',
    intro:'ID 选择器会根据该元素的ID属性中的内容匹配元素',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/ID_selectors'
  },{
    item:'.class',
    intro:'CSS类选择器会根据元素的类属性中的内容匹配元素',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/Class_selectors'
  }]
},{
  title:'关系选择符',
  title_en:'Relationship Sele...',
  color:'#ffce54',
  list:[{
    item:'EF',
    intro:'实例：div span { background-color: DodgerBlue; }当使用 ␣ 选择符 (这里代表一个空格,更确切的说是一个或多个的空白字符) 连接两个元素时使得该选择器可以只匹配那些由第一个元素作为祖先元素的所有第二个元素(后代元素) . 后代选择器与 子选择器 很相似, 但是后代选择器不需要相匹配元素之间要有严格的父子关系.',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Descendant_combinator'
  },{
    item:'E>F',
          intro:'当使用  > 选择符分隔两个元素时,它只会匹配那些作为第一个元素的直接后代(子元素)的第二元素.',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator'
  },{
    item:'E+F',
          intro:'相邻兄弟选择器 (+) 介于两个选择器之间，当第二个元素紧跟在第一个元素之后，并且两个元素都是属于同一个父元素的子元素，则第二个元素将被选中。',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator'
  },{
    item:'E~F',
          intro:'兄弟选择符，位置无须紧邻，只须同层级，A~B 选择A元素之后所有同层级B元素。',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/General_sibling_combinator'
  }]
},{
  title:'伪对象选择符',
  title_en:'Pseudo-Elemen...',
  color:'#ffce54',
  list:[{
    item:'::first-letter',
    intro:'选中某块级元素第一行的第一个字母，并且文字所处的行之前没有其他内容',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter'
  },{
    item:'::first-line',
          intro:'设置第一行应用样式并且只能在块级元素中使用在其他类型中无效 实例：p::first-line { text-transform: uppercase }',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line'
  },{
    item:'::before',
    intro:'创建一个伪元素，作为已选中元素的前一个子元素，通过content属性为一个元素添加修饰性的内容，此元素默认为行内元素，不能在img和br元素使用',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before'
  },{
    item:'::after',
    intro:'创建一个伪元素，作为已选中元素的最后一个子元素，通过content属性为一个元素添加修饰性的内容，此元素默认为行内元素，不能在img和br元素使用',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after'
  },{
    item:'::selection',
    intro:'CSS伪元素应用于文档中被用户高亮的部分（比如使用鼠标或其他选择设备选中的部分）',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection'
  }]
},{
  title:'变换',
  title_en:'Transform',
  color:'#a0d468',
  list:[{
    item:'transform',
    intro:'属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改CSS视觉格式化模型的坐标空间来实现的',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform'
  },{
    item:'transform-origin',
    intro:'CSS属性让你更改一个元素变形的原点',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin'
  }]
},{
  title:'过渡',
  title_en:'Transition',
  color:'#a0d468',
  list:[{
    item:'transition',
    intro:'transition CSS 属性是 transition-property，transition-duration，transition-timing-function 和 transition-delay 的一个简写属性',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition'
  },{
    item:'transition-property',
    intro:'transition-property 指定应用过渡属性的名称。',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-property'
  },{
    item:'transition-duration',
    intro:'transition-duration 属性以秒或毫秒为单位指定过渡动画所需的时间。默认值为 0s ，表示不出现过渡动画。',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-duration'
  },{
    item:'transition-timing-function',
          intro:'transition-timing-function 属性用来描述这个中间值是怎样计算的。实质上，通过这个函数会建立一条加速度曲线，因此在整个transition变化过程中，变化速度可以不断改变。',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function'
  },{
    item:'transition-delay',
    intro:'CSS的transition-delay属性规定了在过渡效果开始作用之前需要等待的时间',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-delay'
  }]
},{
  title:'动画',
  title_en:'Animation',
  color:'#a0d468',
  list:[{
    item:'animation',
    intro:'该animation属性被指定为一个或多个单个动画，以逗号分隔',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/animation'
  },{
    item:'animation-name',
    intro:'设置一个或多个动画应用到的元素。每个名称都是一个规则，用于设置动画序列的属性值',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-name'
  },{
    item:'animation-duration',
    intro:'属性设置的时间，一个动画了完成一个周期的长度',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration'
  },{
    item:'animation-timing-function',
    intro:'设置动画的进展如何通过每个周期的持续时间',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function'
  },{
    item:'animation-delay',
    intro:'动画可以在之后立即开始，也可以在动画中立即开始。',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay'
  },{
    item:'animation-iteration-count',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count'
  },{
    item:'animation-direction',
    intro:'指定动画播放次数 infinite永远重复',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction'
  },{
    item:'animation-play-state',
    intro:'属性设置动画是否正在运行或暂停',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state'
  },{
    item:'animation-fill-mode',
    intro:'指定元素动画后的位置',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode'
  }]
},{
  title:'伪类选择符',
  title_en:'Pseudo-Classes S...',
  color:'#a0d468',
  list:[{
    item:':link',
    intro:'在CSS 伪类表示尚未访问过的元素。它匹配每个未访问的，或具有属性的元素',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/:link'
  },{
    item:':visited',
    intro:'在CSS 伪类表示用户已经访问过的链接。出于隐私原因，可以使用此选择器修改的样式非常有限。:visited',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/:visited'
  },{
    item:':hover',
    intro:'在CSS 伪类表示用户已经访问过的链接。出于隐私原因，可以使用此选择器修改的样式非常有限。:visited',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/:hover'
  },{
    item:':active',
    intro:':active 使用鼠标时，“激活”通常在用户按下主鼠标按钮时启动',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/:active'
  },{
    item:':focus',
    intro:'通常在用户单击或点击元素或使用键盘的“tab”键选择它时触发',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/:focus'
  },{
    item:':lang()',
    intro:'在CSS 伪类匹配的基础上，他们被确定为在语言元素 ',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/:lang'
  },{
    item:':not()',
    intro:'在CSS 伪类表示不匹配选择的列表元素。由于它阻止选择特定项，因此它被称为否定伪类',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not'
  },{
    item:':root',
    intro:'代表文档树的根元素相匹配。在HTML中，表示元素并且与选择器相同，只是它的特异性更高',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root'
  },{
    item:':first-child',
    intro:'表示一组同级元素中的第一元素',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/:first-child'
  },{
    item:':last-child',
    intro:'表示一组同级元素中的最后一个元素',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child'
  },{
    item:':only-child',
    intro:'在:only-childCSS 伪类表示没有任何兄弟姐妹的元素。这与:first-child:last-child或相同:nth-child(1):nth-last-child(1)',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-child'
  },{
    item:':nth-child(n)',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/:nth-child'
  },{
    item:':nth-last-child(2n+1)',
    intro:'选中其同组元素中的某个元素',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child'
  },{
    item:':first-of-type',
    intro:'表示其类型的一组同级元素中的第一元素',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type'
  },{
    item:':last-of-type',
    intro:'表示其类型的一组同级元素中的最后一元素',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/:last-of-type'
  },{
    item:':only-of-type',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-of-type'
  },{
    item:':nth-of-type()',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type'
  },{
    item:':nth-last-of-type',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-of-type'
  },{
    item:':empty',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/:empty'
  },{
    item:':checked',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/:checked'
  },{
    item:':enabled',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled'
  },{
    item:':disabled',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled'
  },{
    item:':target',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/:target'
  },{
    item:'@page:first',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first'
  },{
    item:'@page:left',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/:left'
  },{
    item:'@page:right',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/:right'
  }]
},{
  title:'内容',
  title_en:'Content',
  color:'#a0d468',
  list:[{
    item:'content',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/content'
  },{
    item:'counter-increment',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment'
  },{
    item:'counter-reset',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/counter-reset'
  },{
    item:'quotes',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/quotes'
  }]
},{
  title:'颜色值',
  title_en:'Values',
  color:'#ac92ec',
  list:[{
    item:'Color Name',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/color_value#Color_keywords'
  },{
    item:'HEX',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/color_value#rgb()'
  },{
    item:'RGB',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/color_value#rgb()'
  },{
    item:'RGBA',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#rgba()'
  },{
    item:'HSL',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#hsl()'
  },{
    item:'HSLA',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#hsla()'
  },{
    item:'transparent',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#transparent_keyword'
  }]
},{
  title:'文本值',
  title_en:'Textual',
  color:'#ac92ec',
  list:[{
    item:'<string>',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/string'
  },{
    item:'<url>',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/uri'
  },{
    item:'<identifier>',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/@keyframes'
  }]
},{
  title:'函数值',
  title_en:'Functional',
  color:'#ac92ec',
  list:[{
    item:'counter()',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/counter'
  },{
    item:'attr()',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/attr'
  },{
    item:'calc()',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/calc'
  },{
    item:'cycle()',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/cycle'
  }]
},{
  title:'图像值',
  title_en:'Image',
  color:'#ac92ec',
  list:[{
    item:'linear-gradient()',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient'
  },{
    item:'radial-gradient()',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient'
  },{
    item:'repeating-linear-gradient()',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient'
  }]
},{
  title:'数字值',
  title_en:'Numeric',
  color:'#ac92ec',
  list:[{
    item:'<integer>',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/integer'
  },{
    item:'<number>',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/number'
  }]
},{
  title:'其它类型值',
  title_en:'Other',
  color:'#ac92ec',
  list:[{
    item:'<length>',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/length'
  },{
    item:'<percentage>',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/percentage'
  },{
    item:'<angle>',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/angle'
  },{
    item:'<time>',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/time'
  },{
    item:'<frequency>',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/frequency'
  }]
},{
  title:'布局',
  title_en:'Layout',
  color:'#a0d468',
  list:[{
    item:'clear',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/clear'
  },{
    item:'display',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/display'
  },{
    item:'float',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/float'
  },{
    item:'overflow',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/overflow'
  },{
    item:'overflow-x',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/overflow-x'
  },{
    item:'overflow-y',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/overflow-y'
  },{
    item:'visibility',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/visibility'
  }]
},{
  title:'定位',
  title_en:'Positioning',
  color:'#a0d468',
  list:[{
    item:'position',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/position'
  },{
    item:'top',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/top'
  },{
    item:'right',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/right'
  },{
    item:'bottom',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/bottom'
  },{
    item:'left',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/left'
  },{
    item:'z-index',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/z-index'
  },{
    item:'clip',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/clip'
  }]
},{
  title:'列表',
  title_en:'List',
  color:'#a0d468',
  list:[{
    item:'list-style',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/list-style'
  },{
    item:'list-style-image',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/list-style-image'
  },{
    item:'list-style-position',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/list-style-position'
  },{
    item:'list-style-type',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/list-style-type'
  }]
},{
  title:'表格',
  title_en:'Table',
  color:'#a0d468',
  list:[{
    item:'table-layout',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/table-layout'
  },{
    item:'border-collapse',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-collapse'
  },{
    item:'border-spacing',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-spacing'
  },{
    item:'caption-side',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/caption-side'
  },{
    item:'empty-cells',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/empty-cells'
  }]
},{
  title:'用户界面',
  title_en:'User Interface',
  color:'#a0d468',
  list:[{
    item:'box-sizing',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/box-sizing'
  },{
    item:'nav-index',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/nav-index'
  },{
    item:'nav-up',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/nav-up'
  },{
    item:'nav-right',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/nav-right'
  },{
    item:'nav-down',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/nav-down'
  },{
    item:'nav-left',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/nav-left'
  },{
    item:'outline',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/outline'
  },{
    item:'outline-width',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/outline-width'
  },{
    item:'outline-style',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/outline-style'
  },{
    item:'outline-color',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/outline-color'
  },{
    item:'outline-offset',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/outline-offset'
  },{
    item:'text-overflow',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/text-overflow'
  },{
    item:'ime-mode',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/ime-mode'
  },{
    item:'cursor',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/cursor'
  },{
    item:'resize',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/resize'
  },{
    item:'user-select',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/user-select'
  }]
},{
  title:'伸缩盒（新）',
  title_en:'Flexible Box',
  color:'#a0d468',
  list:[{
    item:'flex',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/flex'
  },{
    item:'flex-grow',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/flex-grow'
  },{
    item:'flex-shrink',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/flex-shrink'
  },{
    item:'flex-basis',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/flex-basis'
  },{
    item:'flex-flow',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/flex-flow'
  },{
    item:'flex-direction',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/flex-direction'
  },{
    item:'flex-wrap',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/flex-wrap'
  },{
    item:'align-content',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/align-content'
  },{
    item:'align-items',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/align-items'
  },{
    item:'align-self',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/align-self'
  },{
    item:'justify-content',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/justify-content'
  },{
    item:'order',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/order'
  }]
},{
  title:'多列',
  title_en:'Multi-column',
  color:'#a0d468',
  list:[{
    item:'columns',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/columns'
  },{
    item:'column-width',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/column-width'
  },{
    item:'column-count',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/column-count'
  },{
    item:'column-gap',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/column-gap'
  },{
    item:'column-rule',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/column-rule'
  },{
    item:'column-rule-width',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/column-rule-width'
  },{
    item:'column-rule-style',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/column-rule-style'
  },{
    item:'column-rule-color',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/column-rule-color'
  },{
    item:'column-span',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/column-span'
  },{
    item:'column-fill',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/column-fill'
  },{
    item:'column-break-before',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-before'
  },{
    item:'column-break-after',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-after'
  },{
    item:'column-break-inside',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-inside'
  }]
},{
  title:'语法与规则',
  title_en:'Rules',
  color:'rgb(200, 218, 168)',
  list:[{
    item:'!important',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/Specificity'
  },{
    item:'/* Comment */',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Comments'
  },{
    item:'@charset',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/@charset'
  },{
    item:'@import',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/@import'
  },{
    item:'@media',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/@media'
  },{
    item:'@font-face',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/@font-face'
  },{
    item:'@page',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/@page'
  },{
    item:'@keyframes',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/@keyframes'
  }]
},{
  title:'长度单位',
  title_en:'Length',
  color:'#4fc1e9',
  list:[{
    intro:'',
    item:'em'
  },{
    intro:'',
    item:'ex'
  },{
    intro:'',
    item:'ch'
  },{
    intro:'',
    item:'rem'
  },{
    intro:'',
    item:'vw'
  },{
    intro:'',
    item:'vh'
  },{
    intro:'',
    item:'vm'
  },{
    intro:'',
    item:'cm'
  },{
    intro:'',
    item:'mm'
  },{
    intro:'',
    item:'in'
  },{
    intro:'',
    item:'pt'
  },{
    intro:'',
    item:'pc'
  },{
    intro:'',
    item:'px'
  }]
},{
  title:'角度问题',
  title_en:'Angle',
  color:'#4fc1e9',
  list:[{
    intro:'',
    item:'deg'
  },{
    intro:'',
    item:'grad'
  },{
    intro:'',
    item:'rad'
  },{
    intro:'',
    item:'turn'
  }]
},{
  title:'时间单位',
  title_en:'Time',
  color:'#4fc1e9',
  list:[{
    intro:'',
    item:'s'
  },{
    intro:'',
    item:'ms'
  }]
},{
  title:'频率单位',
  title_en:'Frequency',
  color:'#4fc1e9',
  list:[{
    intro:'',
    item:'Hz'
  },{
    intro:'',
    item:'kHz'
  }]
},{
  title:'尺寸',
  title_en:'Dimension',
  color:'#4fc1e9',
  list:[{
    item:'width',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/width'
  },{
    item:'min-width',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/min-width'
  },{
    item:'max-width',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/max-width'
  },{
    item:'height',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/height'
  },{
    item:'min-height',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/min-height'
  },{
    item:'max-height',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/max-height'
  }]
},{
  title:'外边距',
  title_en:'Margin',
  color:'#4fc1e9',
  list:[{
    item:'margin',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/margin'
  },{
    item:'margin-top',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/margin-top'
  },{
    item:'margin-right',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/margin-right'
  },{
    item:'margin-bottom',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/margin-bottom'
  },{
    item:'margin-left',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/margin-left'
  }]
},{
  title:'内边距',
  title_en:'Padding',
  color:'#4fc1e9',
  list:[{
    item:'padding',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/padding'
  },{
    item:'padding-top',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/padding-top'
  },{
    item:'padding-right',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/padding-right'
  },{
    item:'padding-bottom',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/padding-bottom'
  },{
    item:'padding-left',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/padding-left'
  }]
},{
  title:'边框',
  title_en:'Border',
  color:'#a0d468',
  list:[{
    item:'border',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border'
  },{
    item:'border-widht',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-width'
  },{
    item:'border-style',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-style'
  },{
    item:'border-color',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-color'
  },{
    item:'border-top',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-top'
  },{
    item:'border-top-width',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-top-width'
  },{
    item:'border-top-style',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-top-style'
  },{
    item:'border-top-color',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-right-color'
  },{
    item:'border-right',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-right'
  },{
    item:'border-right-width',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-right-width'
  },{
    item:'border-right-style',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-right-style'
  },{
    item:'border-right-color',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-right-color'
  },{
    item:'border-bottom',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-bottom'
  },{
    item:'border-bottom-width',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-bottom-width'
  },{
    item:'border-bottom-style',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-bottom-style'
  },{
    item:'border-bottom-color',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-bottom-color'
  },{
    item:'border-left',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-left'
  },{
    item:'border-left-width',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-left-width'
  },{
    item:'border-left-style',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-left-style'
  },{
    item:'border-left-color',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-left-color'
  },{
    item:'border-radius',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-radius'
  },{
    item:'border-top-left-radius',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-top-left-radius'
  },{
    item:'border-top-right-radius',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-top-right-radius'
  },{
    item:'border-bottom-left-radius',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-bottom-left-radius'
  },{
    item:'border-bottom-right-radius',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-bottom-right-radius'
  },{
    item:'border-shadow',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/box-shadow'
  },{
    item:'border-image',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-image'
  },{
    item:'border-image-source',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-image-source'
  },{
    item:'border-image-slice',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-image-slice'
  },{
    item:'border-image-width',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-image-width'
  },{
    item:'border-image-outset',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-image-outset'
  },{
    item:'border-image-repeat',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/border-image-repeat'
  }]
},{
  title:'背景',
  title_en:'Background',
  color:'#a0d468',
  list:[{
    item:'background',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/background'
  },{
    item:'background-color',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/background-color'
  },{
    item:'background-image',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/background-image'
  },{
    item:'background-repeat',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/background-repeat'
  },{
    item:'background-attachment',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/background-attachment'
  },{
    item:'background-position',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/background-position'
  },{
    item:'background-origin',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/background-origin'
  },{
    item:'background-clip',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/background-clip'
  },{
    item:'background-size',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/background-size'
  }]
},{
  title:'颜色',
  title_en:'Color',
  color:'#a0d468',
  list:[{
    item:'color',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/color'
  },{
    item:'opacity',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/opacity'
  }]
},{
  title:'字体',
  title_en:'Font',
  color:'#a0d468',
  list:[{
    item:'font',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/font'
  },{
    item:'font-style',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/font-style'
  },{
    item:'font-variant',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/font-variant'
  },{
    item:'font-weigh',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/font-weight'
  },{
    item:'font-size',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/font-size'
  },{
    item:'font-family',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/font-family'
  },{
    item:'font-stretch',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/font-stretch'
  }]
},{
  title:'文本',
  title_en:'Text',
  color:'#a0d468',
  list:[{
    item:'line-height',
    intro:'',
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS/line-height'
  },{
    item:'letter-spacing',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/letter-spacing'
  },{
    item:'text-align',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/text-align'
  },{
    item:'text-align-last',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/text-align-last'
  },{
    item:'text-indent',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/text-indent'
  },{
    item:'text-justify',
    intro:'',
    url:'http://msdn.microsoft.com/zh-cn/library/gg721783(v=Expression.40).aspx'
  },{
    item:'text-transform',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/text-transform'
  },{
    item:'tab-size',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/tab-size'
  },{
    item:'vertical-align',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/vertical-align'
  },{
    item:'white-space',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/white-space'
  },{
    item:'word-break',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/word-break'
  },{
    item:'word-spacing',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/word-spacing'
  },{
    item:'word-wrap',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/word-wrap'
  },{
    item:'overflow-wrap',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/overflow-wrap'
  }]
},{
  title:'文本装饰',
  title_en:'Text Decoration',
  color:'#a0d468',
  list:[{
    item:'text-decoration',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/text-decoration'
  },{
    item:'text-decoration-line',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/text-decoration-line'
  },{
    item:'text-decoration-style',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/text-decoration-style'
  },{
    item:'text-decoration-color',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/text-decoration-color'
  },{
    item:'text-shadow',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/text-shadow'
  }]
},{
  title:'书写模式',
  title_en:'Writing Modes',
  color:'#a0d468',
  list:[{
    item:'direction',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/direction'
  },{
    item:'unicode-bidi',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/unicode-bidi'
  },{
    item:'writing-mode',
    intro:'',
    url:'https://developer.mozilla.org/zh-CN/docs/CSS/writing-mode'
  }]
}]

// export default css;