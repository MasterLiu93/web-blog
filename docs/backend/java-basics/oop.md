---
sidebar_position: 1
---

# 1.1 面向对象编程

面向对象编程（Object-Oriented Programming，OOP）是一种以对象为中心的编程思想，它将数据和行为封装成独立的软件单元。Java是一种纯面向对象的编程语言，它的所有代码都必须位于类中，所有操作都必须使用对象来执行。

## 封装、继承、多态

### 封装（Encapsulation）

封装是面向对象编程的四大特性之一，它指的是将数据和操作数据的方法绑定在一起，对外部世界隐藏对象的内部实现细节。

**封装的实现方式：**

1. **访问修饰符**：Java提供了四种访问级别的修饰符来实现封装
   - `public`：可以被任何类访问
   - `protected`：可以被同包的类和其子类访问
   - 默认（无修饰符）：只能被同包的类访问
   - `private`：只能在类内部访问

2. **JavaBean模式**：通过私有字段和公共的getter/setter方法实现封装

```java
public class Person {
    private String name;  // 私有字段
    private int age;      // 私有字段
    
    // 公共的getter方法
    public String getName() {
        return name;
    }
    
    // 公共的setter方法，可以添加验证逻辑
    public void setName(String name) {
        if (name != null && !name.isEmpty()) {
            this.name = name;
        }
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
}
```

**封装的优点：**

- **信息隐藏**：隐藏实现细节，只暴露必要的接口
- **提高代码安全性**：通过访问控制保护数据
- **提高可维护性**：实现细节的修改不会影响外部调用
- **可以实现数据验证**：在setter方法中添加验证逻辑

### 继承（Inheritance）

继承是面向对象编程中的一种机制，它允许一个类（子类）获取另一个类（父类）的字段和方法。Java使用`extends`关键字实现继承。

```java
// 父类
public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void eat() {
        System.out.println(name + " is eating.");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping.");
    }
}

// 子类继承父类
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name);  // 调用父类构造器
        this.breed = breed;
    }
    
    // 子类特有方法
    public void bark() {
        System.out.println(name + " is barking.");
    }
    
    // 重写父类方法
    @Override
    public void eat() {
        System.out.println(name + " the " + breed + " is eating bones.");
    }
}
```

**Java继承的特点：**

1. **单继承**：Java只支持单继承，一个类只能有一个直接父类
2. **传递性**：如果C继承B，B继承A，那么C也会继承A的成员
3. **构造顺序**：创建子类对象时，先调用父类构造器，再调用子类构造器
4. **方法重写**：子类可以重写（Override）父类的方法
5. **super关键字**：用于调用父类的构造器、方法和访问父类的字段

**继承的优点：**

- **代码重用**：避免代码重复
- **建立类的层次结构**：反映现实世界中的分类关系
- **多态的基础**：为多态提供前提条件

### 多态（Polymorphism）

多态是面向对象编程的核心概念之一，它允许使用父类类型的引用变量来引用子类对象，同一个行为具有不同的实现方式。

**多态的实现方式：**

1. **方法重写（Override）**：子类重新定义父类的方法
2. **方法重载（Overload）**：在同一个类中定义多个同名但参数列表不同的方法

```java
// 多态示例
public class AnimalTest {
    public static void main(String[] args) {
        // 父类引用指向子类对象
        Animal animal1 = new Dog("Bobby", "Bulldog");
        Animal animal2 = new Cat("Kitty");
        
        // 多态调用
        animal1.eat();  // 调用Dog的eat方法
        animal2.eat();  // 调用Cat的eat方法
        
        // 向下转型
        if (animal1 instanceof Dog) {
            Dog dog = (Dog) animal1;
            dog.bark();  // 调用子类特有方法
        }
    }
}
```

**Java多态的特点：**

1. **运行时绑定**：方法调用在运行时根据对象的实际类型决定
2. **只适用于方法**：Java的多态只针对方法，不适用于字段
3. **向上转型自动进行**：子类对象可以自动转换为父类类型
4. **向下转型需要强制类型转换**：父类引用转换为子类类型需要显式转换，且可能抛出异常

**多态的优点：**

- **提高代码的灵活性和扩展性**：同一个方法调用可以有不同的行为
- **降低耦合度**：可以使用父类或接口类型作为参数，适应不同的子类对象
- **支持"开闭原则"**：系统对扩展开放，对修改关闭

## 抽象类和接口

### 抽象类（Abstract Class）

抽象类是不能被实例化的类，它可以包含抽象方法（没有实现的方法）和具体方法（有实现的方法）。抽象类为子类提供一个模板，强制子类实现某些方法。

```java
// 抽象类
public abstract class Shape {
    // 抽象方法（没有实现）
    public abstract double calculateArea();
    
    // 具体方法（有实现）
    public void display() {
        System.out.println("This is a shape with area: " + calculateArea());
    }
}

// 子类必须实现抽象方法
public class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}
```

**抽象类的特点：**

1. **使用`abstract`关键字声明**：`public abstract class ClassName {}`
2. **不能被实例化**：不能使用`new`创建抽象类对象
3. **可以包含抽象方法和具体方法**：抽象方法没有实现，具体方法有实现
4. **子类必须实现所有抽象方法**：除非子类也是抽象类
5. **可以有构造器**：用于初始化子类对象时调用
6. **可以包含字段、静态方法、final方法等**：与普通类一样

### 接口（Interface）

接口是一种完全抽象的类型，它只包含抽象方法和常量定义。接口定义了一组规范，实现类必须遵守这些规范。Java 8之后，接口也可以包含默认方法和静态方法。

```java
// 接口定义
public interface Drawable {
    // 常量（默认public static final）
    String TOOL = "Pen";
    
    // 抽象方法（默认public abstract）
    void draw();
    
    // Java 8: 默认方法
    default void displayInfo() {
        System.out.println("Drawing with " + TOOL);
    }
    
    // Java 8: 静态方法
    static void printHelp() {
        System.out.println("This interface defines drawable objects");
    }
}

// 实现接口
public class Rectangle implements Drawable {
    private double width;
    private double height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle of width " + width + " and height " + height);
    }
}
```

**接口的特点：**

1. **使用`interface`关键字声明**：`public interface InterfaceName {}`
2. **不能被实例化**：接口不能创建对象
3. **多实现**：一个类可以实现多个接口
4. **默认方法**（Java 8+）：接口可以有带有默认实现的方法
5. **静态方法**（Java 8+）：接口可以有静态方法
6. **私有方法**（Java 9+）：接口可以有私有方法，用于默认方法内的代码重用

### 抽象类vs接口

| 特性 | 抽象类 | 接口 |
|------|--------|------|
| 实例化 | 不能被实例化 | 不能被实例化 |
| 构造器 | 可以有构造器 | 不能有构造器 |
| 方法实现 | 可以有具体方法和抽象方法 | 主要是抽象方法，也可以有默认和静态方法 |
| 继承关系 | 单继承（一个类只能继承一个抽象类） | 多实现（一个类可以实现多个接口） |
| 字段 | 可以有各种类型的字段 | 只能有常量（public static final） |
| 访问修饰符 | 可以有各种访问修饰符 | 方法默认是public（Java 8前） |
| 适用场景 | 表示"是什么"的关系，强调类的本质 | 表示"能做什么"的能力，强调行为规范 |

## 内部类

内部类是定义在另一个类内部的类。Java支持多种内部类，它们有不同的特性和用途。

### 成员内部类（Member Inner Class）

成员内部类是定义在类内部、方法外部的非静态类。

```java
public class Outer {
    private int outerField = 1;
    
    // 成员内部类
    public class Inner {
        private int innerField = 2;
        
        public void display() {
            // 可以直接访问外部类的成员
            System.out.println("OuterField: " + outerField);
            System.out.println("InnerField: " + innerField);
        }
    }
    
    public void createInner() {
        Inner inner = new Inner();
        inner.display();
    }
}

// 外部创建内部类对象
Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();
inner.display();
```

**成员内部类特点：**

1. **可以访问外部类的所有成员**：包括私有成员
2. **必须先创建外部类对象**：内部类对象依赖于外部类对象
3. **可以被各种访问修饰符修饰**：public、protected、private等

### 静态内部类（Static Nested Class）

静态内部类是使用`static`修饰的内部类，它不依赖于外部类的实例。

```java
public class Outer {
    private static int staticOuterField = 1;
    private int instanceOuterField = 2;
    
    // 静态内部类
    public static class StaticNested {
        private int innerField = 3;
        
        public void display() {
            // 只能访问外部类的静态成员
            System.out.println("StaticOuterField: " + staticOuterField);
            // 不能访问外部类的实例成员
            // System.out.println(instanceOuterField); // 错误
        }
    }
}

// 创建静态内部类对象
Outer.StaticNested nested = new Outer.StaticNested();
nested.display();
```

**静态内部类特点：**

1. **只能访问外部类的静态成员**：不能访问非静态成员
2. **不需要外部类实例**：可以独立于外部类对象创建
3. **可以包含静态和非静态成员**：与普通类一样

### 局部内部类（Local Inner Class）

局部内部类是定义在方法内部的类。

```java
public class Outer {
    
    public void method() {
        final int localVar = 10;  // 局部变量
        
        // 局部内部类
        class LocalInner {
            public void display() {
                // 可以访问外部方法的final或effectively final的局部变量
                System.out.println("LocalVar: " + localVar);
            }
        }
        
        // 在方法内创建和使用
        LocalInner inner = new LocalInner();
        inner.display();
    }
}
```

**局部内部类特点：**

1. **只在定义它的方法内可见**：作用域限制在方法内部
2. **可以访问外部类的所有成员**：包括私有成员
3. **可以访问方法的final或effectively final的局部变量**：Java 8之后，没有显式声明为final但值不变的变量也可以被访问

### 匿名内部类（Anonymous Inner Class）

匿名内部类是没有名称的局部内部类，用于创建只使用一次的类的实例。

```java
public class Button {
    // 接口定义
    public interface OnClickListener {
        void onClick();
    }
    
    private OnClickListener listener;
    
    public void setOnClickListener(OnClickListener listener) {
        this.listener = listener;
    }
    
    public void click() {
        if (listener != null) {
            listener.onClick();
        }
    }
}

// 使用匿名内部类
Button button = new Button();
button.setOnClickListener(new Button.OnClickListener() {
    @Override
    public void onClick() {
        System.out.println("Button clicked!");
    }
});
button.click();

// Java 8+ 可以使用Lambda表达式简化
button.setOnClickListener(() -> System.out.println("Button clicked with lambda!"));
```

**匿名内部类特点：**

1. **没有名称**：直接创建实例
2. **必须继承一个类或实现一个接口**：定义时必须指定
3. **不能有构造器**：因为没有类名
4. **不能有静态成员**：匿名类不能定义静态成员
5. **可以被Lambda表达式替代**（Java 8+）：如果实现的接口只有一个抽象方法

### 内部类的优点

1. **封装性**：内部类可以对外部隐藏
2. **访问外部类成员**：内部类可以方便地访问外部类的私有成员
3. **提高代码可读性和维护性**：将密切相关的类放在一起
4. **回调的实现**：特别是匿名内部类，适合事件处理和回调实现

## 面试题

### 1. 面向对象编程的四大特性是什么？

**答**：面向对象编程的四大特性是封装、继承、多态和抽象。
- **封装**：隐藏对象的属性和实现细节，只对外提供操作接口
- **继承**：子类继承父类的特征和行为，使子类具有父类的属性和方法
- **多态**：同一操作作用于不同的对象，可以有不同的解释和执行结果
- **抽象**：抽取共同的属性和行为形成类，忽略非本质的细节

### 2. Java中方法重载和方法重写的区别？

**答**：
- **方法重载(Overloading)**：
  - 在同一个类中
  - 方法名相同，参数列表不同（参数类型、个数、顺序）
  - 返回类型可以相同也可以不同
  - 是编译时多态
  
- **方法重写(Overriding)**：
  - 在子类中
  - 方法名、参数列表、返回类型必须与父类相同（返回类型可以是子类类型）
  - 访问权限不能比父类更严格
  - 不能抛出比父类更广泛的异常
  - 是运行时多态

### 3. 抽象类和接口的主要区别？如何选择使用抽象类还是接口？

**答**：
**主要区别**：
1. 抽象类可以有构造器，接口不能有构造器
2. 抽象类可以有普通方法，接口中方法默认是抽象的（Java 8前）
3. 一个类只能继承一个抽象类，但可以实现多个接口
4. 抽象类中可以有各种类型的字段，接口中只能有常量

**选择标准**：
- 使用**抽象类**的情况：
  1. 需要在几个相关类之间共享代码
  2. 需要定义非静态或非常量字段
  3. 子类有许多共同的方法和字段
  4. 表示"is-a"关系，强调的是类的本质

- 使用**接口**的情况：
  1. 不相关的类需要实现同一功能
  2. 需要指定行为但不关心实现细节
  3. 需要支持多继承
  4. 表示"can-do"关系，强调的是行为能力

### 4. 为什么Java只支持单继承？如何实现类似多继承的效果？

**答**：
Java只支持单继承是为了避免多继承带来的复杂性和"菱形问题"（当一个类继承自两个有相同方法的类时出现的歧义）。

在Java中实现类似多继承效果的方式：
1. **接口实现**：一个类可以实现多个接口
2. **内部类**：通过内部类持有其他类的引用
3. **组合**：使用组合而非继承，在类中包含其他类的实例
4. **代理模式**：为其他类的方法提供包装器

### 5. 什么是内部类？Java中有哪几种内部类？

**答**：
内部类是定义在另一个类内部的类。Java中有四种主要的内部类：

1. **成员内部类**：定义在类内部、方法外部的非静态类
   - 可以访问外部类的所有成员
   - 需要通过外部类实例来创建

2. **静态内部类**：使用static修饰的内部类
   - 只能访问外部类的静态成员
   - 不需要外部类实例即可创建

3. **局部内部类**：定义在方法内部的类
   - 只在方法内可见
   - 可以访问方法中的final或effectively final的局部变量

4. **匿名内部类**：没有名字的局部内部类，用于创建一次性使用的类实例
   - 必须继承一个类或实现一个接口
   - 在Java 8中，如果实现的接口只有一个抽象方法，可用Lambda表达式替代

### 6. 什么是final关键字？它在类、方法和变量上有什么不同的作用？

**答**：
final关键字表示"最终的"或"不可改变的"。它在不同上下文中有不同的作用：

- **final类**：不能被继承，如String、Integer等
- **final方法**：不能被子类重写
- **final变量**：
  - 基本类型：值不能改变
  - 引用类型：引用不能指向其他对象，但对象的内容可以改变
- **final参数**：方法中不能改变参数值

### 7. Java中this关键字和super关键字的作用和区别？

**答**：
**this关键字**：
- 引用当前对象
- 调用当前类的其他构造器：`this(...)`
- 返回当前对象：`return this;`
- 区分局部变量和实例变量：`this.name = name;`

**super关键字**：
- 引用父类对象
- 调用父类构造器：`super(...)`
- 调用父类方法：`super.method()`
- 访问父类字段：`super.field`

**区别**：
- this引用当前类对象，super引用父类部分
- this可用于返回当前对象，super不能单独使用
- 构造器中，this()和super()都必须是第一条语句，所以不能同时出现

### 8. 解释Java中的多态性以及它的实现机制？

**答**：
多态性是指同一个行为具有不同的表现形式。在Java中，多态主要通过方法重写和动态绑定实现。

**实现机制**：
1. **方法重写**：子类重新定义父类的虚方法
2. **向上转型**：将子类对象赋值给父类引用
3. **动态绑定**：在运行时根据对象的实际类型调用相应的方法

**示例**：
```java
Animal animal = new Dog();  // 向上转型
animal.makeSound();  // 调用Dog的makeSound方法，而不是Animal的
```

**JVM实现原理**：
- Java虚拟机使用虚方法表(Virtual Method Table)实现方法分派
- 每个类都有一个虚方法表，存储该类的虚方法指针
- 调用虚方法时，JVM查找对象的实际类型的虚方法表，找到正确的方法实现

### 9. 抽象类中可以有构造方法吗？抽象方法可以是static的吗？

**答**：
- **抽象类可以有构造方法**：虽然抽象类不能直接实例化，但它的构造方法可以被子类通过super()调用，用于初始化抽象类的字段。

- **抽象方法不能是static**：
  - 抽象方法必须被子类重写，依赖于实例
  - 静态方法属于类而非实例，不能被重写（只能被隐藏）
  - 抽象方法和静态方法的概念相互矛盾

### 10. 谈谈接口的默认方法（Default Method）。为什么Java 8引入了这一特性？

**答**：
Java 8中引入的接口默认方法是指在接口中定义的带有实现的方法，使用default关键字修饰。

**特点**：
- 必须有方法体
- 实现类可以不实现这些方法
- 如果实现类实现了多个具有相同默认方法的接口，必须重写该方法以解决冲突

**引入原因**：
1. **库演化**：允许在不破坏现有实现的情况下向接口添加新功能
2. **向后兼容性**：保持与旧代码的兼容
3. **API增强**：Java集合库得到了显著增强，如List接口新增sort()方法

**示例**：
```java
public interface Collection<E> {
    default void sort(Comparator<? super E> c) {
        // 默认实现
    }
}
```

这样，所有Collection的实现类都自动获得sort方法，而不需要修改它们的代码。 