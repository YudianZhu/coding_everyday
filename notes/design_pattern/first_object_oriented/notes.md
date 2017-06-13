##动态类型语言与鸭子类型
动态类型语言的变量类型要到程序运行时候，待变量被赋予某个值之后，才会具有某种类型。  
鸭子类型(duck typing)的概念-拥有鸭子的特征, 只关注对象的行为，而不关注对象本身，也就是关注HAS-A，而不是IS-A。    
利用鸭子类型的思想，可以实现"面向接口编程，而不是面向实现编程"。  ex:一个对象若有length属性，也可以依照下标存储属性，
这个对象就可以被当做数组来使用。  

##多态
同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果。  
多态背后的思想是将‘做什么’和‘谁去做以及怎样去做’分离开来，也就是将’不变的事物’和‘可能变的事物’区分开来。  

##封装
广义的封装包括封装数据，封装实现，封装变化
封装实现-对象内部对其他对象而言是透明的。对象之间只通过暴露的API接口来通信。  ex:迭代器each函数  
封装变化 - 创建性模式、结构性模式和行为型模式  
在原型编程的思想中，类不是必须的，对象未必需要从类中创建而来，一个对象是通过克隆另外一个对象得到的。

##原型编程
一个重要特性：当对象无法响应某个请求时，会把该请求委托给它自己的原型。
要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它。  
JavaScript中的根对象是Object.prototype对象，即一个空对象。  
当使用new运算符来调用函数时，此时的函数就是一个构造器，不是类。用new运算符来创建对象的过程，实际上也只是先克隆Object.
prototype，再进行其他一些额外操作的过程。