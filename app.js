//base de datos local de preguntas
const bd_juego = [
    {
        pregunta:"Which of the following method signatures is a valid declaration of an entry point in a Java application?",
        op0:"public void main(String[] args)",
        op1:"public static void main()",
        op2:"private static void start(String[] mydata)",
        op3:"public static final void main(String[] mydata)",
        correcta:"0"
    },
{
        pregunta:"The following class diagram demonstrates the relationship between Gold and Silver, which extend the Metal class. Assume the attributes are all declared public. Which  statement about the diagram is not true?",
        op0:"The diagram demonstrates platform independence in Java.",
        op1:"The diagram demonstrates object-oriented design in Java.",
        op2:"The Gold and Silver classes inherit weight and color attributes from the Metalclass.",
        op3:"Gold does not inherit the luster attribute.",
        correcta:"3"
    },
{
        pregunta:"What is the proper filename extension for a Java bytecode compiled file?",
        op0:".java",
        op1:".bytecode",
        op2:".class",
        op3:".dll",
        correcta:"2"
    },
{
        pregunta:"Given that a Date class exists in both the java.util and java.sql packages, what is the result of compiling the following class?",
        op0:"The code does not compile because of lines 1 and 2.",
        op1:"The code does not compile because of line 4.",
        op2:"The code does not compile because of line 5.",
        op3:"The code compiles without issue.",
        correcta:"0"
    },
{
        pregunta:"Which of the following is not a facet of traditional object-oriented programming languages?",
        op0:"Objects are grouped as procedures, separate from the data they act on.",
        op1:"An object can take many forms via casting.",
        op2:"An object can hold data, referred to as attributes.",
        op3:"An object can perform actions, via methods.",
        correcta:"0"
    },
{
        pregunta:"Which variables have a scope limited to a method?",
        op0:"Interface variables",
        op1:"Class variables",
        op2:"Instance variables",
        op3:"Local variables",
        correcta:"3"
    },
{
        pregunta:"Which package is imported into every Java class by default?",
        op0:"java.util",
        op1:"java.lang",
        op2:"system.lang",
        op3:"java.system",
        correcta:"1"
    },
{
        pregunta:"Which of the following is not a valid code comment in Java?",
        op0:"// Add 5 to the result",
        op1:"/*** TODO: Fix bug 12312 ***/",
        op2:"# Add configuration value",
        op3:"/* Read file from system ****/",
        correcta:"2"
    },
{
        pregunta:"Which statement about a valid .java file is true?",
        op0:"It can only contain one class declaration.",
        op1:"It can contain one public class declaration and one public interface definition.",
        op2:"It must define at least one public class.",
        op3:"It may define at most one public class.",
        correcta:"3"
    },
{
        pregunta:"Given the following application, fill in the missing values in the table starting from the top and going downward.",
        op0:"2, 0, 1",
        op1:"2, 2, 1",
        op2:"1, 0, 1",
        op3:"0, 2, 1",
        correcta:"2"
    },
{
        pregunta:"Which statement about import statements is true?",
        op0:"The class will not compile if it contains unused import statements.",
        op1:"Unused import statements can be removed from the class without causing a class to become unable to be compiled.",
        op2:"The class will not compile if a duplicate import statement is present.",
        op3:"If a class contains an import statement for a class used in the program that cannot be found, it can still compile.",
        correcta:"1"
    },
{
        pregunta:"What is the result of compiling and executing the following class?",
        op0:"It does not compile.",
        op1:"It compiles but throws an exception at runtime.",
        op2:"It compiles and outputs 5.",
        op3:"It compiles and outputs 15.",
        correcta:"0"
    },
    {
        pregunta:" Which statements about Java are true \n I. The  java command can execute .java and .class files. \n II.Java is not object oriented. \n III.The  javac command compiles directly into native machine code.",
        op0:" I only",
        op1:" III only",
        op2:" II and III",
        OP3:" None are true",
        correcta:"2"
    },
    {
        pregunta:" Which of the following lines of code is not allowed as the first line of a Java class file?",
        op0:" import widget.*;",
        op1:" // Widget Manager",
        op2:" package sprockets;",
        op3:" int facilityNumber;",
        correcta:"2"
    },
    {
        pregunta:" Which one of the following statements is true about using packages to organize your code in Java?",
        op0:" Every class is required to include a package declaration.",
        op1:" To create a new package, you need to add a package.init file to the directory.",
        op2:" Packages allow you to limit access to classes, methods, or data from classes outside the package.",
        op3:" It is not possible to restrict access to objects and methods within a package.",
        correcta:"0"
    },
    {
        pregunta:" Given that the current directory is /user/home, with an application Java file in  /user/home/Manager.java that uses the default package, which are the correct commands to compile and run the application in Java?",
        op0:" javac Manager java Manager",
        op1:" javac Manager.javajava Manager",
        op2:" javac Managerjava Manager.class",
        op3:" javac Manager.javajava Manager.class",
        correcta:"0"
    },
    {
        pregunta:" Structuring a Java class such that only methods within the class can access its instance  variables is referred to as_.",
        op0:" platform independence",
        op1:" object orientation",
        op2:" inheritance",
        op3:" encapsulation",
        correcta:"2"
    },
    {
        pregunta:" What is the output of the following code snippet? /nString tree = 'pine'; /nint count = 0; \n if (tree.equals('pine')) \n int height = 55; \n count = count + 1; \n} ",
        op0:" 1",
        op1:" 55",
        op2:" 55",
        op3:" It does not compile.",
        correcta:"1"
    },
    {
        pregunta:" Which of the following is true of a Java bytecode file?",
        op0:" It can be run on any computer with a compatible JVM",
        op1:" It can only be executed on the same type of computer that it was created on.",
        op2:" It can be easily read and modified in a standard text editor.",
        op3:" It requires the corresponding .java that created it to execute",
        correcta:"0"
    },
    {
        pregunta:" What is the correct character for terminating a statement in Java?",
        op0:" A colon (:)",
        op1:" An end-of-line character",
        op2:" A tab character",
        op3:" semicolon (;)",
        correcta:"3"
    },
    {
        pregunta:" What is the result of compiling and executing the following class? \n 1: public class Tolls { \n 2:    private static int yesterday = 1; \n 3:    int tomorrow = 10; \n 4:    public static void main(String[] args) { \n 5:       Tolls tolls = new Tolls(); \n 6:       int today=20, tomorrow = 40; \n 7:       System.out.print(today + tolls.tomorrow + tolls.yesterday); \n } \n}",
        op0:" The code does not compile due to line 6.",
        op1:" The code does not compile due to line 7.",
        op3:" 31",
        op4:" 61",
        correcta:"1"
    },
    {
        pregunta:" Given the following class definition, which is the only line that does not contain a  compilation error? \n 1: public ThisClassDoesNotCompile { \n 2:    double int count; \n 3:    void errors() {} \n 4:    static void private limit; }",
        op0:" Line 1",
        op1:" Line 2",
        op2:" Line 3",
        op3:" Line 4",
        correcta:"1"
    },
    {
        pregunta:" Which of the following features allows a Java class to be run on a wide variety of computers and devices?",
        op0:" Encapsulation",
        op1:" Object oriented",
        op2:" Inheritance",
        op3:" Platform independence",
        correcta:"3"
    },
    {
        pregunta:" Which of the following is not a property of a JVM?",
        op0:" It prevents Java bytecode from being easily decoded/decompiled.",
        op1:" It supports platform independence.",
        op2:" It manages memory for the application.",
        op3:" It translates Java instructions to machine instructions.",
        correcta:"0"
    },
    {
        pregunta:" Which of the following variables are always in scope for the entire program?",
        op0:" Package variables",
        op1:" Class variables",
        op2:" Instance variables",
        op3:" Local variables",
        correcta:"3"
    },
    {
        pregunta:" Given the following wildcard import statements, which class would be included in the import? /nimport television.actor.; /nimport movie.director.;",
        op0:" television.actor.recurring.Marie",
        op1:" movie.directors.John",
        op2:" television.actor.Package",
        op3:" movie.NewRelease",
        correcta:"2"
    },
    {
        pregunta:" Which is the correct order of statements for a Java class file?",
        op0:" import statements, package statement, class declaration",
        op1:" package statement, class declaration, import statement",
        op2:" class declaration, import statements, package declaration",
        op3:" package statement, import statements, class declaration",
        correcta:"1"
    },
    {
        pregunta:" Given the following class definition, what is the maximum number of import statements that can be discarded and still have the code compile? For this question, assume that the Blackhole class is defined only in the stars package. \n package planetarium; \n import java.lang.; \n import stars.; \n import java.lang.Object; \n import stars.Blackhole; \n public class Observer { \n  public void find(Blackhole blackhole) {} \n}",
        op0:" Zero",
        op1:" One",
        op2:" Two",
        op3:" Three",
        correcta:"3"
    },
    {
        pregunta:" Given the following class definition, which command will cause the application to output the message White-tailed? \n package forest;public class Deer { \n   public static void main(String... deerParams) { \n      System.out.print(theInput[2]);   } \n}",
        op0:" java forest.Deer deer 5 'White-tailed deer' ",
        op1:" java forest.Deer 'White-tailed deer' deer 3",
        op2:" java forest.Deer Red deer White-tailed dee",
        op3:" java forest.Deer My 'deer White-tailed'",
        correcta:"3"
    },
    {
        pregunta:" Which of the following is a true statement?",
        op0:" The java command compiles a .java file into a .class file",
        op1:" The    javac command compiles a .java file into a .class file",
        op2:" The    java command compiles a .class file into a .java file.",
        op3:" The    javac command compiles a .class file into a .java file.",
        correcta:"1"
    },
    {
        pregunta:" Which of the following statements about Java is true?",
        op0:" Java is a procedural programming language",
        op1:" Java allows method overloading",
        op2:" Java allows operator overloading",
        op3:" Java allows direct access to objects in memory ",
       correcta:"0"
    },
{
        pregunta:" Given the following code, what values inserted in order into the blank lines, allow the code to compile? __________agent; public _________ Banker {      private static _________ getMaxWithdrawal() {         return 10;      }}",
        op0:" import, class, null",
        op1:" import, interface, void",
        op2:" package, int, int",
        op3:" package, class, long",
        correcta:"1"
    },
{
        pregunta:" What is the output of the following application?public class Airplane {   static int start = 2   final int end;   public Airplane(int x) {      x = 4;      end = x;   }   public void fly(int distance) {      System.out.print(end-start+);      System.out.print(distance);   }   public static void main(String... start) {      new Airplane(",
        op0:"2  5",
        op1:"8  5",
        op2:"6  5",
        op3:"The code does not compile",
        correcta:"1"
    },
{
        pregunta:" What is one of the most important reasons that Java supports extending classes via inheritance?",
        op0:" Inheritance requires that a class that extends another class be in the same package.",
        op1:" The program must spend extra time/resources at runtime jumping through multiple layers of inheritance to determine precise methods and variables.",
        op2:" Method signature changes in parent classes may break subclasses that use overloaded methods.",
        op3:" Developers minimize duplicate code in new classes by sharing code in a common parent class.",
        correcta:"3"
    },
{
        pregunta:" Which of the following is a valid code comment in Java?",
        op0:" //////// Walk my dog",
        op1:" #! Go team!",
        op2:" / Process fails at runtime /",
        op3:" None of the above",
        correcta:"2"
    },
{
        pregunta:" Which of the following method signatures is not a valid declaration of an entry point in a Java application?",
        op0:" public static void main(String... arguments)",
        op1:" public static void main(String arguments)",
        op2:" public static final void main(String[]  arguments)",
        op3:" public static void main(String[] arguments)",
        correcta:"2"
    },
{
        pregunta:" Given the file Magnet.java below, which of the marked lines can you independently insert the line public String color; into and still have the code compile?// line a1public class Magnet {   // line a2   public void attach() {      // line a3   }   // line a4}",
        op0:" a1 and a3",
        op1:" a2 and a4",
        op2:" a2, a3, and a4",
        op3:" a1, a2, a3, and a4",
        correcta:"2"
    },
{
        pregunta:" What is required to define a valid Java class file?",
        op0:" A    class declaration",
        op1:" A    package statement",
        op2:" At least one import statement",
        op3:" The    public modifier",
        correcta:"0"
    },
{
        pregunta:" What is the proper filename extension for a Java source file?",
        op0:" .jav",
        op1:" .class",
        op2:" .source",
        op3:" .java",
        correcta:"3"
    },
{
        pregunta:" Given that a Math class exists in both the java.lang and pocket.complex packages, what is the result of compiling the following class?1: package pocket;2: import pocket.complex.*;3: import java.util.*;4: public class Calculator {5:   public static void main(String[] args) {6:      System.out.print(Math.floor(5));7:   }8: }",
        op0:" The code does not compile because of line 2.",
        op1:" The code does not compile because of line 3.",
        op2:" The code does not compile because of line 6.",
        op3:" The code compiles without issue.",
        correcta:"2"
    },
{
        pregunta:" Given a class that uses the following import statements, which class would not be auto-matically accessible within the class without using its full package name?import dog.*; import dog.puppy.*;",
        op0:" dog.puppy.female.KC",
        op1:" dog.puppy.Georgette",
        op2:" dog.Webby",
        op3:" java.lang.Object",
        correcta:"3"
    },
{
        pregunta:" _________is the technique of structuring programming data as a unit consisting of attributes, with actions defined on the unit.",
        op0:" Encapsulation",
        op1:" Object orientation",
        op2:" Platform independence",
        op3:" Polymorphism",
        correcta:"0"
    },
{
        pregunta:" Given the following class definition, what is the maximum number of import statements that can be discarded and still have the code compile? For this question, assume that the Broccoli class is in the food.vegetables package, and the Apple class is the food.fruitpackage.package food;import food.vegetables.*;import food.fruit.*;import java.util.Date;public class Grocery {   Apple a; Broccoli b;  Date c;}",
        op0:"0",
        op1:"1",
        op2:"2",
        op3:"3",
        correcta:"0"
    },
{
        pregunta:" Given the following application, what is the expected output?public class Keyboard {   private boolean numLock = true;   static boolean capLock = false;   public static void main(String... shortcuts) {      System.out.print(numLock++capLock);   }}",
        op0:" true false",
        op1:" false false",
        op2:" It does not compile",
        op3:" It compiles but throws an exception at runtime.",
        correcta:"1"
    },
{
        pregunta:" What is the result of compiling and executing the following class?public class RollerSkates {   static int wheels = 1;   int tracks = 5;   public static void main(String[] arguments) {      RollerSkates s = new RollerSkates();      int feet=4, tracks = 15;      System.out.print(feet + tracks + s.wheels);   }}",
        op0:" The code does not compile.",
        op1:"5",
        op2:"10",
        op3:"20",
        correcta:"3"
    },
{
        pregunta:" What is the result of compiling and executing the following class?package sports;public class Bicycle {   String color = red;   private void printColor(String color) {      color = purple;      System.out.print(color);   }   public static void main(String[] rider) {      new Bicycle().printColor(blue);   }}",
        op0:"red",
        op1:"purple",
        op2:"blue",
        op3:" It does not compile",
        correcta:"2"
    },
{
        pregunta:" Which statements about calling the compilation command javac and the execution com-mand java are true?I.java may use a period . to separate packages.II.javac takes a .java file and returns a .class file.III.java may use a slash (/) to separate packages.",
        op0:" I only",
        op1:" II only",
        op2:" I and II",
        op3:" I, II, and III",
        correcta:"2"
    },
{
        pregunta:" What is the result of compiling and executing the following application?package forecast;public class Weather {   private static boolean heatWave = true;   public static void main() {      boolean heatWave = false;      System.out.print(heatWave);   }}",
        op0:"True",
        op1:"False",
        op2:" It does not compile.",
        op3:" It compiles but throws an error at runtime.",
        correcta:"3"
    },
    {
        pregunta:".What is the result of compiling and executing the following application?package forecast;public class Weather {   private static boolean heatWave = true;   public static void main() {      boolean heatWave = false;      System.out.print(heatWave);   }}",
        op0:"A. true",
        op1:"B. false",
        op2:"C. It does not compile.",
        op3:"D. It compiles but throws an error at runtime.",
        correcta:"1"
    },
    {
        pregunta:".Given the following class diagram, which Java implementation most closely matches this structure?Book+ numberOfPages+ getRating()",
        op0:"A. public class Book {       public int numOfPages;",
        op1:"B. public class Book {       public String getRating() {return null;} }",
        op2:"C. public class Book {       public int numberOfPages;       public String getRating() {return null;} }",
        op3:"D.public class Book {       void numberOfPages; }",
        correcta:"2"
    },
    {
        pregunta:"Which statement about the JVM is true?",
        op0:"A. The JVM schedules garbage collection on a predictable schedule.",
        op1:"B. The JVM ensures that the application will always terminate.",
        op2:"C. The JVM requires a properly defined entry point method to execute the application.",
        op3:"D. A Java compiled code can be run on any computer.",
        correcta:"3"
    },
    {
        pregunta:"Which of the following declarations does not compile?",
        op0:"A.double num1, int num2 = 0;",
        op1:"B.int num1, num2;",
        op2:"C.int num1, num2 = 0;",
        op3:"D.int num1 = 0, num2 = 0;",
        correcta:"2"
    },
    {
        pregunta:"2.What is the output of the following?public static void main(String... args) {   String chair, table = metal;   chair = chair + table;   System.out.println(chair);}",
        op0:"A.metal",
        op1:"B.metalmetal",
        op2:"C.nullmetal",
        op3:"D.The code does not compile.",
        correcta:"3"
    },
    {
        pregunta:"Which is correct about an instance variable of type String?",
        op0:"A.It defaults to an empty string",
        op1:"B.It defaults to null.",
        op2:"C.It does not have a default value.",
        op3:"D.It will not compile without initializing on the declaration line.",
        correcta:"1"
    },
    {
        pregunta:"Which of the following is not a valid variable name?",
        op0:"A._blue",
        op1:"B.2blue",
        op2:"C.blue$",
        op3:"D.Blue",
        correcta:"1"
    },
    {
        pregunta:"Which of these class names best follows standard Java naming conventions?",
        op0:"A.fooBar",
        op1:"B.FooBar",
        op2:"C.FOO_BAR",
        op3:"D.F_o_o_B_a_r",
        correcta:"1"
    },
    {
        pregunta:"How many of the following methods compile?public String convert(int value) {   return value.toString();}public String convert(Integer value) {   return value.toString();WOW! eBook www.wowebook.org }public String convert(Object value) {   return value.toString();",
        op0:"A.None",
        op1:"B.One",
        op2:"C.Two",
        op3:"D.Three",
        correcta:"0"
    },
    {
        pregunta:"Which of the following does not compile?",
        op0:"A.int num = 999;",
        op1:"B.int num = 9_9_9;",
        op2:"C.int num = _9_99;",
        op3:"D.None of the above; they all compile.",
        correcta:"2"
    },
    {
        pregunta:"Which of the following is a wrapper class?",
        op0:"A.int",
        op1:"B.Int",
        op2:"C.Integer",
        op3:"D.Object",
        correcta:"2"
    },
    {
        pregunta:"What is the result of running this code?public class Values {   integer a = Integer.valueOf();   public static void main(String[] nums) {      integer a = Integer.valueOf();      integer b = Integer.valueOf(3);      System.out.println(a + b);  }}",
        op0:"A.4",
        op1:"B.5",
        op2:"C.The code does not compile.",
        op3:"D.The code compiles but throws an exception at runtime.",
        correcta:"2"
    },
    {
        pregunta:"Which best describes what the new keyword does?",
        op0:"A.Creates a copy of an existing object and treats it as a new one",
        op1:"B.Creates a new primitive",
        op2:"C.Instantiates a new object",
        op3:"D.Switches an object reference to a new one",
        correcta:"2"
    },
    {
        pregunta:"What is the result of compiling and executing the following application?package forecast;public class Weather {   private static boolean heatWave = true;   public static void main() {      boolean heatWave = false;      System.out.print(heatWave);   }}",
        op0:"C. It does not compile.",
        op1:"B. false",
        op2:"C. It does not compile.",
        op3:"D. It compiles but throws an error at runtime.",
        correcta:"B"
    },
    {
        pregunta:"Given the following class diagram, which Java implementation most closely matches this structure?Book+ numberOfPages+ getRating()",
        op0:"A. public class Book {       public int numOfPages;",
        op1:"B. public class Book {       public String getRating() {return null;} }",
        op2:"C. public class Book {       public int numberOfPages;       public String getRating() {return null;} }",
        op3:"D.public class Book {       void numberOfPages; }",
        correcta:"C"
    },
    {
        pregunta:"Which statement about the JVM is true?",
        op0:"A. The JVM schedules garbage collection on a predictable schedule.",
        op1:"B. The JVM ensures that the application will always terminate.",
        op2:"C. The JVM requires a properly defined entry point method to execute the application.",
        op3:"D. A Java compiled code can be run on any computer.",
        correcta:"D"
    },
    {
        pregunta:"Which of the following declarations does not compile?",
        op0:"A.double num1, int num2 = 0;",
        op1:"B.int num1, num2;",
        op2:"C.int num1, num2 = 0;",
        op3:"D.int num1 = 0, num2 = 0;",
        correcta:"C"
    },
    {
        
        pregunta:"What is the output of the following?public static void main(String... args) {   String chair, table = metal;   chair = chair + table;   System.out.println(chair);}",
        op0:"A.metal",
        op1:"B.metalmetal",
        op2:"C.nullmetal",
        op3:"D.The code does not compile.",
        correcta:"D"
    },
    {
        pregunta:"Which is correct about an instance variable of type String?",
        op0:"A.It defaults to an empty string",
        op1:"B.It defaults to null.",
        op2:"C.It does not have a default value.",
        op3:"D.It will not compile without initializing on the declaration line.",
        correcta:"B"
    },
    {
        pregunta:"Which of the following is not a valid variable name?",
        op0:"A._blue",
        op1:"B.2blue",
        op2:"C.blue$",
        op3:"D.Blue",
        correcta:"B"
    },
    {
        pregunta:"Which of these class names best follows standard Java naming conventions?",
        op0:"A.fooBar",
        op1:"B.FooBar",
        op2:"C.FOO_BAR",
        op3:"D.F_o_o_B_a_r",
        correcta:"B",
    },
    {
        pregunta:"How many of the following methods compile?public String convert(int value) {   return value.toString();}public String convert(Integer value) {   return value.toString();WOW! eBook www.wowebook.org }public String convert(Object value) {   return value.toString();",
        op0:"A.None",
        op1:"B.One",
        op2:"C.Two",
        op3:"D.Three",
        correcta:"A"
    },
    {
        pregunta:"Which of the following does not compile?",
        op0:"A.int num = 999;",
        op1:"B.int num = 9_9_9;",
        op2:"C.int num = _9_99;",
        op3:"D.None of the above; they all compile.",
        correcta:"C"
    },
    {
        pregunta:"Which of the following is a wrapper class?",
        op0:"A.int",
        op1:"B.Int",
        op2:"C.Integer",
        op3:"D.Object",
        correcta:"C"
    },
    {
        pregunta:"What is the result of running this code?public class Values {   integer a = Integer.valu}",
        op0:"A.4",
        op1:"B.5",
        op2:"C.The code does not compile.",
        op3:"D.The code compiles but throws an exception at runtime.",
        correcta:"C"
    },
    {
        pregunta:"Which best describes what the new keyword does?",
        op0:"A.Creates a copy of an existing object and treats it as a new one",
        op1:"B.Creates a new primitive",
        op2:"C.Instantiates a new object",
        op3:"D.Switches an object reference to a new one",
        correcta:"C"
    },
    {
        pregunta:"Which is the first line to trigger a compiler error?  double d1 = 5f;    // p1  double d2 = 5.0;   // p2  float f1 = 5f;     // p3  float f2 = 5.0;    // p4 ",
        op0:"p1", 
        op1:"p2",
        op2:"p3",
        op3:"p4",
        correcta:"3"
    },
    {
        pregunta:"Which of the following lists of primitive types are presented in order from smallest to largest data type?",
        op0:"byte, char, float, double",
        op1:"byte, char, double, float",
        op2:"char, byte, float, double",
        op3:"char, double, float, bigint",
        correcta:"0"
    },
    {
        pregunta:"Which of the following is not a valid order for elements in a class?",
        op0:"Constructor, instance variables, method names",
        op1:"Instance variables, constructor, method names",
        op2:"Method names, instance variables, constructor",
        op3:"None of the above: all orders are valid.",
        correcta:"3"
    },
    
    {
        pregunta:"None of the above 1:  public class Bowling { 2:     { System.out.println(); } 3:     public Bowling () { 4:        System.out.println(); 5:     } 6:     static { System.out.println(); } 7:     { System.out.println(); } 8:  }",
        op0:"None",
        op1:"One",
        op2:"Two",
        op3:"Three",
        correcta:"2"
    },
    {
        pregunta:"Of the types double, int, and short, how many could fill in the blank to have this code output 0?  public static void main(String[] args) { ______ defaultValue; System.out.println(defaultValue); } ",
        op0:"None",
        op1:"One",
        op2:"Two",
        op3:"Three",
        correcta:"0"
    },
    {
        pregunta:"What is true of the finalize() method?",
        op0:"It may be called zero or one times.",
        op1:"It may be called zero or more times.",
        op2:"It will be called exactly once.",
        op3:"It may be called one or more times.",
        correcta:"0"
    },
    {
        pregunta:"Which of the following is not a wrapper class?",
        op0:"Double",
        op1:"Integer",
        op2:"Long",
        op3:"String",
        correcta:"3"
    },
    {
        pregunta:"Suppose you have the following code. Which of the images best represents the state of the  references right before the end of the main method, assuming garbage collection hasn’t run?  1:  public class Link { 2:     private String name; 3:     private Link next; 4:     public Link(String name, Link next) { 5:       this.name = name; 6:       this.next = next; }  8:     public void setNext(Link next) { 9:       this.next = next; 10:    } 11:    public Link getNext() { 12:       return next; 13 :    } 14:    public static void main(String... args) { 15:       Link link1 = new Link",
        op0:"A",
        op1:"B",
        op2:"C",
        op3:"D",
        correcta:"0"
    },
    
    {
        pregunta:"Which type can fill in the blank?____ pi = 3.14;" ,
        op0:"byte",
        op1:"float",
        op2:"double",
        op3:"short",
        correcta:"0"
    },
    {
        pregunta:"What is the first line in the following code to not compile?  public static void main(String[] args) { int Integer = 0; // k1 Integer int = 0; // k2 Integer ++; // k3 int++; // k4 }",
        op0:"k1",
        op1:"k2",
        op2:"k3",
        op3:"k4",
        correcta:"1"
        },
    {
        pregunta:"Suppose foo is a reference to an instance of a class. Which of the following is not trueabout foo.bar?",
        op0:"bar is an instance variable.",
        op1:"bar is local variable.",
        op2:"It can be used to read from bar.",
        op3:"It can be used to write to bar",
        correcta:"2"
        },
    {
        pregunta:"Which of the following is not a valid class declaration?",
        op0:"class building {}",
        op1:"class Cost$ {}",
        op2:"class 5MainSt {}",
        op3:"class _Outside {}",
        correcta:"3"
        },
    {
        pregunta:"Which of the following can fill in the blanks to make this code compile? d = new (1_000_000_.00);",
        op0:"double, double",
        op1:"double, Double",
        op2:"Double, double",
        op3:"None of the above",
        correcta:"3"
        },
    {
        pregunta:"Which is correct about a local variable of type String?",
        op0:"It defaults to an empty string.",
        op1:"It defaults to null.",
        op2:"It does not have a default value.",
        op3:"It will not compile without initializing on the declaration line.",
        correcta:"3"
        },
    {
        pregunta:"Of the types double, int, long, and short, how many could fill in the blank to have this code output 0? static --------- defaultValue; public static void main(String[] args) {    System.out.println(defaultValue); }",
        op0:"One",
        op1:"Two",
        op2:"Three",
        op3:"Four",
        correcta:"2"
        },
    {
        pregunta:"Which of the following is true about primitives?",
        op0:"You can call methods on a primitive.",
        op1:"You can convert a primitive to a wrapper class object simply by assigning it.",
        op2:"You can convert a wrapper class object to a primitive by calling valueOf().",
        op3:"You can store a primitive directly into an ArrayList.",
        correcta:"1"
        },
    {
        pregunta:"What is the output of the following? Integer integer = new Integer(4); System.out.print(integer.byteValue()); System.out.print("-"); int i = new Integer(4); System.out.print(i.byteValue());",
        op0:"4-0",
        op1:"4-4",
        op2:"The code does not compile.",
        op3:"The code compiles but throws an exception at runtime.",
        correcta:"2"
        },
    {
        pregunta:"Given the following code, fill in the blank to have the code print bounce. public class TennisBall { public TennisBall() {   System.out.println()} public static void main(String[] slam) { --------------------  } }",
        op0:"TennisBall;",
        op1:"TennisBall();",
        op2:"new TennisBall;",
        op3:"new TennisBall();",
        correcta:"3"
        },
    {
        pregunta:"Given the following code, fill in the blank to have the code print bounce. public class TennisBall { public TennisBall() {   System.out.println()} public static void main(String[] slam) { --------------------  } }",
        op0:"TennisBall;",
        op1:"TennisBall();",
        op2:"new TennisBall;",
        op3:"new TennisBall();",
        correcta:"3"
        },
    {
        pregunta:"Which two primitives have wrapper classes that are not merely the name of the primitive with an uppercase letter?",
        op0:"byte and char",
        op1:"byte and int",
        op2:"char and int",
        op3:"None of the above",
        correcta:"2"
        },
    {
        pregunta:"Which of the following is true about String instance variables?",
        op0:"They can be set to null.",
        op1:"They can never be set from outside the class they are defined in.",
        op2:"They can only be set in the constructor.",
        op3:"They can only be set once per run of the program.",
        correcta:"0"
        },
    {
        pregunta:"Which statement is true about primitives?",
        op0:"Primitive types begin with a lowercase letter.",
        op1:"Primitive types can be set to null.",
        op2:"String is a primitive.",
        op3:"You can create your own primitive types.",
        correcta:"0"
        },
    {
        pregunta:"How do you force garbage collection to occur at a certain point?",
        op0:"Call System.forceGc()",
        op1:"Call System.gc()",
        op2:"Call System.requireGc()",
        op3:"None of the above",
        correcta:"3"
        },
    {
        pregunta: "How many of the String objects are eligible for garbage collection right before the end of the main method?",
        op0: "None",
        op1: "One",
        op2: "Two",
        op3: "Three",
        correcta: "0"
    },
    {
        pregunta: "Which of the following can fill in the blanks to make this code compile?",
        op0: "double, double",
        op1: "double, Double",
        op2: "Double, double",
        op3: "None of the above",
        correcta: "1"
    },
    {
      pregunta: "What does the following output?",       
        op0: "block",
        op1: "constructor",
        op2: "instance",
        op3: "The code does not compile.",
        correcta: "1"
    },
    {
         pregunta: "How many of the following lines compile?",
            op0: "None",
            op1: "One",
            op2: "Two",
            op3: "Three",
            correcta: "2"   
    },
    {
        pregunta: "Which pairs of statements can accurately fill in the blanks in this table?",
        op0: "Blank 1: an instance method only, Blank 2: a static method only",
        op1: "Blank 1: an instance or static method, Blank 2: a static method only",
        op2: "Blank 1: an instance method only, Blank 2: an instance or static method",
        op3: "Blank 1: an instance or static method, Blank 2: an instance or static method",
        correcta: "3"
    },
    {
        pregunta: "Which of the following does not compile?",
        op0: "double num = 2.718;",
        op1: "double num = 2._718;",
        op2: "double num = 2.7_1_8;",
        op3: "None of the above; they all compile.",
        correcta: "1;"
    },
    {
        pregunta: "Which of the following lists of primitive numeric types is presented in order from smallest to largest data type?",
        op0: "byte, short, int, long",
        op1: "int, short, byte, long",
        op2: "short, byte, int, long",
        op3: "short, int, byte, long",
        correcta: "0"
    },
    {
        pregunta: "Which of the following lists of primitive numeric types is presented in order from smallest to largest data type?",
        op0: "byte, short, int, long",
        op1: "int, short, byte, long",
        op2: "short, byte, int, long",
        op3: "short, int, byte, long",
        correcta: "0"
    },
    { 
        pregunta: "Which of the following is the output of this code, assuming it runs to completion?",
        op0: "play-",
        op1: "play-play-",
        op2: "play-clean-play-",
        op3: "play-play-clean-clean-",
        correcta: "3"
    },
    {
        pregunta: "Which is the most common way to fill in the blank to implement this method?",
        op0: "p.beakLength = b;",
        op1: "p['beakLength'] = b;",
        op2: "p[beakLength] = b;",
        op3: "None of the above",
        correcta: "0"
    },
    {
        pregunta: "Fill in the blanks to indicate whether a primitive or wrapper class can be assigned without the compiler using the autoboxing feature.",
        op0: "int, int",
        op1: "int, Integer",
        op2: "Integer, int",
        op3: "Integer, Integer",
        correcta: "0"
    },
    {
        pregunta: "How many objects are eligible for garbage collection right before the end of the main method?",
        op0: "None",
        op1: "One",
        op2: "Two",
        op3: "Three",
        correcta: "1"
    },
    {
        pregunta: "Which is a valid constructor for this class?",
        op0: "public TennisBall static create() { return new TennisBall(); }",
        op1: "public TennisBall static newInstance() { return new TennisBall():}",
        op2: "public TennisBall() {}",
        op3: "public void TennisBall() {}",
        correcta: "2"
    },
    {
        pregunta: "Which of the following is not a possible output of this code, assuming it runs to completion?",
        op0: "play",
        op1: "play-play",
        op2: "play-play-clean",
        op3: "play-play-clean-clean",
        correcta: "1"
    },
    {
        pregunta: "Which converts a primitive to a wrapper class object without using autoboxing?",
        op0: "Call the asObject() method",
        op1: "Call the constructor of the wrapper class",
        op2: "Call the convertToObject() method",
        op3: "Call the toObject() method",
        correcta: "1"
    },
    {
        pregunta: "What is the output of the following?",
        op0: "a",
        op1: "ab",
        op2: "aab",
        op3: "None of the above",
        correcta: "2"
       
    },
    {
            pregunta:" Which of the following variable types is not permitted in a switch statement? ",
            op0:" String ",
            op1:" double ",
            op2:" int ",
            op3:" char ",
            correcta:" 1 "
        },
    {
            pregunta:" What is the value of tip after executing the following code snippet?\n int meal = 5;\n int tip = 2;\n int total = meal + (meal>6 ? ++tip : --tip); ",
            op0:" 1 ",
            op1:" 2 ",
            op2:" 3 ",
            op3:" 6 ",
            correcta:" 3 "
        },
    {
            pregunta:" What is the output of the following application?\n package registration;\n public class NameCheck {\n   public static void main(String... data) {\n      String john =  ",
            op0:" true true ",
            op1:" true falseC ",
            op2:" false true ",
            op3:" false false ",
            correcta:" 2 "
        },
    {
            pregunta:" What is the output of the following application?\n package planning;\n public class ThePlan {\n   public static void main(String[] input) {\n      int plan = 1;\n      plan = plan++ + --plan;\n      if(plan==1) {\n         System.out.prin ",
            op0:" Plan A ",
            op1:" Plan B ",
            op2:" Plan C ",
            op3:" None of the above ",
            correcta:"0"
        },
    {
            pregunta:" Which of the following statements about a default branch in a switch statement is correct? ",
            op0:" All    switch statements must include a default statement. ",
            op1:" The    default statement is required to be placed after all case statements. ",
            op2:" Unlike a case statement, the default statement does not take a value. ",
            op3:" A    default statement can only be used when at least one case statement is present. ",
            correcta:" 1"
        },
    {
            pregunta:" What is the value of thatNumber after the execution of the following code snippet?\n long thatNumber = 5 >= 5 ? 1+2 : 1*1;\n if(++thatNumber < 4)\n   thatNumber += 1; ",
            op0:" 3 ",
            op1:" 4 ",
            op2:" 5 ",
            op3:" The answer cannot be determined until runtime. ",
            correcta:"1"
        },
    {
            pregunta:" Which statement immediately exits a switch statement, skipping all remaining case or default branches? ",
            op0:" exit ",
            op1:" break ",
            op2:" goto ",
            op3:" continue ",
            correcta:"1"
        },
    {
            pregunta:" Which statement about ternary expressions is true? ",
            op0:" In some cases, both expressions to the right of the conditional operator in a ternary expression will be evaluated at runtime. ",
            op1:" Ternary expressions require parentheses for proper evaluation. ",
            op2:" The ternary expressions are a convenient replacement for an if-then-else statement ",
            op3:" Ternary expressions support int and boolean expressions for the left-most operand. ",
            correcta:"2 "
        },
    {
            pregunta:" What is the output of the following application?package voting;1: public class Election {\n 2:     public void calculateResult(Integer candidateA, Integer candidateB) {\n 3:       boolean process = candidateA == null || candidateA.intValue() < 10;\n 4:       boolean value = candidateA && candidateB;\n 5:       System.out.print(process || value);\n 6:    }\n 7:    public static void main(String[] unused) {\n 8:       new Election().calculateResult(null,203);\n 9:    }\n 10: } ",
            op0:"  True ",
            op1:" False ",
            op2:" The code does not compile. ",
            op3:" The code compiles but throws a NullPointerException on line 3 at runtime. ",
            correcta:"2"
        },
    {
            pregunta:" What is the output of the following application?\n package dinosaur;\n public class Park {\n    public final static void main(String... arguments) {\n      int pterodactyl = 6;\n      long triceratops = 3;\n      if(pterodactyl % 3 >= 1) \n        triceratops++; \n        triceratops--;\n      System.out.print(triceratops);\n   }\n } ",
            op0:" 2 ",
            op1:" 3 ",
            op2:" 4 ",
            op3:" The code does not compile. ",
            correcta:"1"
        },
    {
            pregunta:" Which statement about if-then statements is true? ",
            op0:" An if-then statement is required to have an else statement. ",
            op1:" If the boolean test of an if-then statement evaluates to false, then the target clause of\n the if-then statement will still be evaluated. ",
            op2:" An if-then statement is required to cast an object. ",
            op3:" An if-then statement can execute a single statement or a block { }. ",
            correcta:" 3"
        },
    {
            pregunta:" What is the output of the following application?\n package restaurant;\n public class Pieces {\n   public static void main(String[] info) {\n      int flair = 15;\n      if(flair >= 15 && flair < 37) {\n         System.out.print",
            op0:" Not enough ",
            op1:" Just right ",
            op2:" Too many ",
            op3:" None of the above ",
            correcta:"2"
        },
    {
            pregunta:"Which statement about case statements of a switch statement is not true?",
            op0:"A    case value can be final.",
            op1:"A    case statement must be terminated with a break statement.",
            op2:"A    case value can be a literal expression",
            op3:"A    case value must match the data type of the switch variable, or be able to be promoted to that type.",
            correcta:"1"
        },
    {
            pregunta:"Given the following truth table, which operator for the boolean expressions x and ycorresponds to this relationship?",
            op0:"--",
            op1:"++",
            op2:"||",
            op3:"&&",
            correcta:"3"
        },
    {
            pregunta:"What is the output of the following code snippet?",
            op0:"Jump!",
            op1:"Hop!",
            op2:"The code does not compile.",
            op3:"The code compiles but throws an exception at runtime.",
            correcta:"1"
        },
    {
            pregunta:"Fill in the blanks: The  operator increases the value of a variable by 1 and returns the new value, while the  operator decreases the value of a variable by 1 and returns the original value.",
            op0:"pre-increment [++v], pre-decrement [--v]",
            op1:"pre-increment [++v], post-decrement [v--]",
            op2:"post-increment [v++], pre-decrement [--v]",
            op3:"post-increment [v++], post-decrement [v--]",
            correcta:"1"
        },
    {
            pregunta:"What is the output of the following application?package jungle;public class TheBigRace {   public static void main(String[] in) {      int tiger = 2;      short lion = 3;      long winner = lion+2*(tiger + lion);      System.out.print(winner);   }}",
            op0:"11",
            op1:"13",
            op2:"25",
            op3:"None of the above",
            correcta:"1"
        },
    {
            pregunta:"Given the following code snippet, assuming dayOfWeek is an int, what variable type of saturday is not permitted?final  saturday = 6;switch(dayOfWeek) {   default:      System.out.print(\"Another Weekday\");      break;   case saturday:      System.out.print(\"Weekend!\");}",
            op0:"byte",
            op1:"long",
            op2:"int",
            op3:"None of the above",
            correcta:"1"
        },
    {
            pregunta:"Given the following code snippet, what is the value of dinner after it is executed?int time = 11;int day = 4;String dinner = time > 10 ? day ? \"Takeout\" : \"Salad\" : \"Leftovers\";",
            op0:"Takeout",
            op1:"Salad",
            op2:"The code does not compile but would compile if parentheses were added.",
            op3:"None of the above",
            correcta:"2"
        },
    {
            pregunta:"What is the output of the following application?package recreation;public class Dancing {   public static void main(String[] vars) {      int leaders = 10 * (2 + (1 + 2 / 5);      int followers = leaders * 2;      System.out.print(leaders + followers < 10 ? \"Too few\" : \"Too many\");   }}",
            op0:"Too few",
            op1:"Too many",
            op2:"The code does not compile.",
            op3:"The code compiles but throws a division by zero error at runtime.",
            correcta:"1"
        },
    {
            pregunta:"What is the output of the following application?package schedule;public class PrintWeek {   public static final void main(String[] days) {      System.out.print(5 + 6 + \"7\" + 8 + 9);   }}",
            op0:"56789",
            op1:"11789",
            op2:"11717",
            op3:"The code does not compile.",
            correcta:"1"
        },
    {
            pregunta:"Fill in the blanks: The  operator is used to find the difference between two numbers, while the  operator is used to find the remainder when one number is divided by another.",
            op0:"/, %",
            op1:"–, %",
            op2:"%, <",
            op3:"–, ||",
            correcta:"1"
        },
    {
            pregunta:"What is the output of the following application?package transporter;public class Rematerialize {   public static void main(String[] input) {      int dog = 11;      int cat = 3;      int partA = dog / cat;      int partB = dog % cat;      int newDog = partB + partA * cat;      System.out.print(newDog);   }}",
            op0:"9",
            op1:"11",
            op2:"15",
            op3:"The code does not compile.",
            correcta:"1"
        },
    {
            pregunta:"What is the output of the following application?package dessert;public class IceCream {   public final static void main(String... args) {      int flavors = 30;      int eaten = 0;      switch(flavors) {         case 30: eaten++;         case 40: eaten+=2;         default: eaten--;      }      System.out.print(eaten);   }}",
            op0:"1",
            op1:"2",
            op2:"3",
            op3:"The code does not compile.",
            correcta:"0"
        },
    {
            pregunta:"What is the output of the following application?package mode;public class Transportation {   public static String travel(int distance) {      return distance<1000 ? \"train\" : 10;   }   public static void main(String[] answer) {      System.out.print(travel(500));   }}",
            op0:"train",
            op1:"10",
            op2:"The code does not compile.",
            op3:"The code compiles but throws an exception at runtime.",
            correcta:"2"
        },
    {
            pregunta:"Fill in the blanks: Given two non-null String objects with reference names apples and oranges, if applesoranges evaluates to true, then applesoranges must also evaluate to true.",
            op0:"==, equals()",
            op1:"!=, equals()",
            op2:"equals(), ==",
            op3:"equals(), =!",
            correcta:"1"
        },
        {
        pregunta:"For a given non-null String myTestVariable, what is the resulting value of executing the statement myTestVariable.equals(null)?",
        op0:"true",
        op1:"false",
        op2:"The statement does not compile.",
        op3:"The statement compiles but will produce an exception when used at runtime.",
        correcta:"1"
    },
    {
        pregunta:"How many 1s are outputted when the following application is compiled and run?package city;public class Road {   public static void main(String... in) {      int intersections = 100;    int streets = 200;      if (intersections < 150) {         System.out.print(\"1\");      } else if (streets && intersections > 1000) {         System.out.print(\"2\");      } if (streets < 500)         System.out.print(\"1\");      else         System.out.print(\"2\");   }}",
        op0:"None",
        op1:"One",
        op2:"Two",
        op3:"The code does not compile.",
        correcta:"3"
    },
    {
        pregunta:"Which statement about the logical operators & and && is true?",
        op0:"The    & and && operators are interchangeable, always producing the same results at runtime.",
        op1:"The    & operator always evaluates both operands, while the && operator may only evaluate the left operand.",
        op2:"Both expressions evaluate to true if either operand is true.",
        op3:"The    & operator always evaluates both operands, while the && operator may only evaluate the right operand.",
        correcta:"3"
    },
    {
        pregunta:"What is the output of the following code snippet?int x = 10, y = 5;boolean w = true, z = false;x = w ? y++ : y--;w = !z;System.out.print((x+y)+\" \"+(w ? 5 : 10));",
        op0:"The code does not compile.",
        op1:"10 10",
        op2:"11 5",
        op3:"12 5",
        correcta:"2"
    },
    {
        pregunta:"What is the output of the following application?package bob;public class AreYouBob {   public static void main(String[] unused) {String bob = new String(\"bob\");      String notBob = bob;      System.out.print((bob==notBob)+\" \"+(bob.equals(notBob)));   }}",
        op0:"true true",
        op1:"true false",
        op2:"false true",
        op3:"false false",
        correcta:"0"
    },
    {
        pregunta:"Given the following truth table, the boolean variables p and q, and the expression p ^ q, what are the missing values in the truth table, starting with the first column?p = truep = falseq = truefalsetrueq = false",
        op0:"false and true",
        op1:"false and false",
        op2:"true and true",
        op3:"true and false",
        correcta:"0"
    },
    {
        pregunta:"Which of the following is not a possible result of executing the following application?public class ConditionallyLogical {   public static void main(String... data) {      if(data.length>=1            && (data[0].equals(\"sound\") || data[0].equals (\"logic\"))            && data.length<2) {         System.out.print(data[0]);      }   }}",
        op0:"Nothing is printed.",
        op1:"sound is printed.",
        op2:"The application throws an exception at runtime.",
        op3:"logic is printed.",
        correcta:"1"
    },
    {
        pregunta:"Fill in the blanks: The operators +, , ,   , and ++ are listed in the same or increasing level of operator precedence.",
        op0:"*, --, /",
        op1:"%, -, *",
        op2:"/, *, %",
        op3:"*, -, /",
        correcta:"3"
    },
    {
        pregunta:"What statement about the ^ operator is correct?",
        op0:"If one of the operands of ^ is true, then the result is always true.",
        op1:"There is a conditional form of the operator, denoted as ^^.",
        op2:"If both operands of ^ are true, the result is true.",
        op3:"The    ^ operator can only be applied to boolean values.",
        correcta:"2"
    },
    {
        pregunta:"Given the following Venn diagram and the variables, x, y, and z, which Java expression most closely represents the filled-in region of the diagram?",
        op0:"x || z",
        op1:"y || (y && z)",
        op2:"x || y",
        op3:"y && x",
        correcta:"0"
    },
    {
        pregunta:"What variable type of red allows the following application to compile?package tornado;public class Kansas {   public static void main(String[] args) {      int colorOfRainbow = 10; red = 5;switch(colorOfRainbow) {         default:            System.out.print(\"Home\");            break;         case red:            System.out.print(\"Away\");      }   }}",
        op0:"long",
        op1:"double",
        op2:"int",
        op3:"None of the above",
        correcta:"2"
    },
    {
        pregunta:"Which two operators would be used to test if a number is equal to or greater than 5.21 but strictly less than 8.1?",
        op0:"> and <=",
        op1:">= and >",
        op2:"< and >=",
        op3:"< and >",
        correcta:"1"
    }, 
    {
    pregunta:"What is the ouput of the following aplication?",
    op0:"Hare wins!",
    op1:"Turtles wins!",
    op2:"the code does not compile",
    op3:"the code compiles but throws a divison by zero error at runtime",
    correcta:"1"
    },
    {
    pregunta:"What is the output of the following application?",
    op0:"0",
    op1:"1",
    op2:"0000",
    op3:"1000",
    correcta:"2"
    },
    {
    pregunta:"What is the output of the following application?",
    op0:"up",
    op1:"midle",
    op2:"down",
    op3:"the code does not compile",
    correcta:"1"
    },
    {
    pregunta:"Fill in the blanks: the operator is true if eiher of the operands are true,while      operator flips a boolean value",
    op0:" +,-",
    op1:"&&,!",
    op2:"|,-",
    op3:"||,!",
    correcta:"2"
    },
    {
    pregunta:"given the following code snippet,what is the vaule of movieRating after it is executed?",
    op0:"2.0",
    op1:"3.0",
    op2:"the code not compile if parenthese were added",
    op3:"none of the above",
    correcta:"1"
    },
    {
    pregunta:"Fil in the blanks:A swithc statement can have   case statenments and    defaukt statements ",
    op0:"at most, at least one",
    op1:"any number of,at most one",
    op2:"at least one,any number of",
    op3:"at least one,at most one",
    correcta:"0"
    },
    {
    pregunta:"Whitch of the following is not possible result of executing the following application? ",
    op0:"nothing is printed",
    op1:"the application thorws an exception at runtime",
    op2:"go outside is printed",
    op3:"stay inside is printed",
    correcta:"3"
    },
    {
    pregunta:"what is the value of (5+(!2,+8)*3-3 % 2)/2 in java ?",
    op0:"2",
    op1:"11",
    op2:"16",
    op3:"none of the above",
    correcta:"2"
    },
    {
    pregunta:"Given the following truth, the boolean variables w and z,and the expresions w||z,what are the missing values in the truth,whit starritng whit the first row?",
    op0:"false and false",
    op1:"true and false",
    op2:"true and true ",
    op3:"false and true ",
    correcta:"1"
    },
    {
    pregunta:"fill in the blanks:the operators-    and % are listend in the same or increasing level of operator   precedence ",
    op0:"+,/,*",
    op1:"--,-,*",
    op2:"++,/,*",
    op3:"*,++,%",
    correcta:"0"
    },
    {
    pregunta:"What is the output of the following application?",
    op0:"ball",
    op1:"swim",
    op2:"the code does not compile due to p1",
    op3:"the code does not compile due to p2",
    correcta:"2"
    },{
    pregunta:"what symbol is used for a varargs method parameter?",
    op0:". .",
    op1:"...",
    op2:"--",
    op3:"---",
    correcta:"3"
    },
    {
    pregunta:"fil in the following code to get the first elemet from the varargs parameter",
    op0:"f",
    op1:"f[0]",
    op2:"f[1]",
    op3:"none of the above",
    correcta:"3"
    },
    {
    pregunta:"whitch of the following are primitives?",
    op0:"only lowecase",
    op1:"only uppercase",
    op2:"bother lowercase and  uppercase",
    op3:"neither lowercase nour uppercase",
    correcta:"1"
    },
    {
    pregunta:"how many of the following are legal declarations?",
    op0:"none",
    op1:"one",
    op2:"two",
    op3:"three",
    correcta:"0"
    },
    {
    pregunta:"given following two method call will not compile?",
    op0:"printstormName(Arlene)",
    op1:"printstormName(new strin[]",
    op2:"printstormNames;",
    op3:"printstormNames(new string []",
    correcta:"1"
    },
    {
        pregunta:" Given the following two methods, which method call will not compile?",
       op0:"printStormName(Arlene);",
       op1:" printStormName(new String[] { Bret });",
       op2:" printStormNames(Cindy);",
       op3:" printStormNames(new String[] { Don});",
       correcta:"1"
   },
{
       pregunta:" How do you determine the number of elements in an array?",
       op0:" buses.length",
       op1:" buses.length()",
       op2:" buses.size",
       op3:" buses.size()",
       correcta:"1"
   },
{
       pregunta:" Which of the following create an empty two-dimensional array with dimensions 2×2?",
       op0:" int[][] blue = new int[2, 2];",
       op1:" int[][] blue = new int[2], [2];",
       op2:" int[][] blue = new int[2][2];",
       op3:" int[][] blue = new int[2 x 2];",
       correcta:"1"
   },{
       pregunta:" How many lines does the following code output?",
       op0:" Six",
       op1:" Seven",
       op2:" The code does not compile.",
       op3:" The code compiles but throws an exception at runtime.",
       correcta:"1"
   },{
       pregunta:" What are the names of the methods to do searching and sorting respectively on arrays?",
       op0:" Arrays.binarySearch() and Arrays.linearSort()",
       op1:" Arrays.binarySearch() and Arrays.sort()",
       op2:" Arrays.search() and Arrays.linearSort()",
       op3:" Arrays.search() and Arrays.sort()",
       correcta:"1"
   },{
       pregunta:" What does this code output?",
       op0:" [1, 9, 10]",
       op1:" [1, 10, 9]",
       op2:" [10, 1, 9]",
       op3:" None of the above",
       correcta:"1"
   },{
       pregunta:" Which of the following references the first and last element in a non-empty array?",
       op0:" trains[0] and trains[trains.length]",
       op1:" trains[0] and trains[trains.length - 1]",
       op2:" trains[1] and trains[trains.length]",
       op3:" trains[1] and trains[trains.length - 1]",
       correcta:"1"
   },{
       pregunta:" How many of the following are legal declarations?",
       op0:" None",
       op1:" One",
       op2:" Two",
       op3:" Three",
       correcta:"1"
   },{
       pregunta:" How many of the following are legal declarations?",
       op0:" None",
       op1:" One",
       op2:" Two",
       op3:" Three",
       correcta:"1"
   },{
       pregunta:"Which statement most accurately represents the relationship between searching and sorting with respect to the Arrays class?",
       op0:"If the array is not sorted, calling Arrays.binarySearch() will be accurate, but slower than if it were sorted.",
       op1:" The array does not need to be sorted before calling Arrays.binarySearch() to get an accurate result.",
       op2:" The array must be sorted before calling Arrays.binarySearch() to get an accurate result.",
       op3:" None of the above",
       correcta:""
   },{
       pregunta:"Which is not a true statement about an array?",
       op0:" An array expands automatically when it is full.",
       op1:" An array is allowed to contain duplicate values.",
       op2:" An array understands the concept of ordered elements.",
       op3:" An array uses a zero index to reference the first element.",
       correcta:"1"
   },{
       pregunta:"Which line of code causes an ArrayIndexOutOfBoundsException? \n String[][] matrix = new String[1][2]; \n matrix[0][0] = Don't think you are, know you are.; \n matrix[0][1] = Im trying to free your mind Neo; \n matrix[1][0] = Is all around you ; \n matrix[1][1] = Why oh why didn't I take the BLUE pill?",
       op0:" m1",
       op1: "m2",
       op2:" m3",
       op3:" m4",
       correcta:"1"
   },{
       pregunta:"What does the following output? \n String[] os = new String[] { Mac, Linux, Window }; \n Arrays.sort(os); \n System.out.println(Arrays.binarySearch(os, Mac));",
       op0:" 0",
       op1:" 1",
       op2:" 2",
       op3:" The output is not defined.",
       correcta:"1"
   },{
       pregunta:"Which is the first line to prevent this code from compiling and running without error? \n char[][] ticTacToe = new char[3,3]; \n ticTacToe[1][3] = 'X'; \n ticTacToe[2][2] = 'X'; \n ticTacToe[3][1] = 'X'; \n System.out.println(ticTacToe.length +  in a row!);  r3",
       op0:" Line r1",
       op1:" Line r2",
       op2:" Line r3",
       op3:" None of the above",
       correcta:"1"
   },{
       pregunta:"How many objects are created when running the following code? \n Integer[] lotto = new Integer[4]; \n lotto[0] = new Integer(1_000_000); \n lotto[1] = new Integer(999_999);",
       op0:" Two",
       op1:" Three",
       op2:" Four",
       op3:" Five",
       correcta:"1"
   },{
       pregunta:"How many of the following are legal declarations? \n [][] String alpha; \n [] String beta; \n String[][] gamma; \n String[] delta[]; \n String epsilon[][];",
       op0:" Two",
       op1:" Three",
       op2:" Four",
       op3:" Five",
       correcta:"1"
   },{
       pregunta:"Which of the options in the graphic best represent the blocks variable? \n char[][] blocks = new char[][] { { 'a', 'b', 'c' }, { 'd' }, { 'e', 'f' } }; \n Option A \n blocks \n ˈaˈ ˈdˈ ˈeˈ \n ˈbˈ ˈfˈ \n ˈcˈ ˈaˈ ˈdˈ ˈeˈ \n ˈbˈ ˈfˈ \n ˈcˈ \n blocks \n Option B \n Option C \n blocks \n ˈaˈ ˈbˈ ˈcˈ \n ˈdˈ \n ˈeˈ ˈfˈ ˈgˈ ˈaˈ ˈbˈ ˈcˈ \n  ˈdˈ \n ˈeˈ ˈfˈ \n blocks \n Option D",
       op0:" Option A",
       op1:" Option B",
       op2:" Option C",
       op3:" Option D",
       correcta:"1"
   },{
       pregunta:"What happens when calling the following method with a non-null and non-empty array? \n public static void addStationName(String[] names) { \n names[names.length] = Times Square;}",
       op0:" It adds an element to the array the value of which is Times Square.",
       op1:" It replaces the last element in the array with the value Times Square.",
       op2:" It does not compile.",
       op3:" It throws an exception.",
       correcta:"1"
   },{
       pregunta:" 23. How many lines does the following code output? \n String[] days = new String[] { Sunday, Monday, Tuesday, \n  Wednesday, Thursday, Friday, Saturday }; \n for (int i = 0; i < days.size(); i++) \n System.out.println(days[i]);",
       op0:" Six",
       op1:" Seven",
       op2:" The code does not compile.",
       op3:" The code compiles but throws an exception at runtime.",
       correcta:"1"
   },{
       pregunta:"How many dimensions does the array reference moreBools allow? \n boolean[][][] bools, moreBools;",
       op0:" One dimension",
       op1:" Two dimensions",
       op2:" Three dimensions",
       op3:" None of the above",
       correcta:"1"
   },{
       pregunta:" 25. What is a possible output of the following code? \n String[] strings = new String[2]; \n System.out.println(strings);",
       op0:" [null, null]",
       op1:" [,]",
       op2:" [Ljava.lang.String;@74a14482",
       op3:" None of the above",
       correcta:"1"
   },
{
       pregunta:"Which is the first line to prevent this code from compiling and running without error? \n char[][] ticTacToe = new char[3][3]; \n ticTacToe[1][3] = 'X'; \n ticTacToe[2][2] = 'X'; \n ticTacToe[3][1] = 'X'; \n System.out.println(ticTacToe.length +  in a row!); // r3",
       op0:" Line r1",
       op1:" Line r2",
       op2:" Line r3",
       op3:" None of the above",
       correcta:"1"
   },   
{
   pregunta: 'What happens when calling the following method with a non-null and non-empty array?","\npublic static void addStationName(String[] names){ \nnames[names.length] = "Times Square";}',
   op0: "It adds an element to the array the value of which is Times Square.",
   op1: "It replaces the last element in the array with the value Times Square.",
   op2: "It does not compile.",
   op3: "It throws an exception.",
   correcta: "3"
},

{
   pregunta: 'How many lines does the following code output? \n public static void main(String[] args){ \n     String[] days = new String[] { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" }; \n     for (int i = 0; i < days.size(); i++) \n         System.out.println(days[i]); \n }',
   op0: "Six",
   op1: "Seven",
   op2: "The code does not compile.",
   op3: "The code compiles but throws an exception at runtime.",
   correcta: "2"
},

{
   
   pregunta: "How many dimensions does the array reference moreBools allow? \n public static void main(String[] args) { \n boolean[][][] bools, moreBools; \n }",
   op0: "One dimension",
   op1: "Two dimensions",
   op2: "Three dimensions",
   op3: "None of the above",
   correcta: "3"
},

{
   
   pregunta: "What is a possible output of the following code? \n public static void main(String[] args) { \n String[] strings = new String[2]; System.out.println(strings); \n }",
   op0: "[null, null]",
   op1: "[,]",
   op2: "[Ljava.lang.String;@74a14482",
   op3: "None of the above",
   correcta: "2"
},

{
   
   pregunta:'Which is the first line to prevent this code from compiling and running without error? \n public static void main(String[] args) { \n char[][] ticTacToe = new char[3][3]; // r1ticTacToe[1][3] = X; // r2ticTacToe[2][2] = X;ticTacToe[3][1] = X;System.out.println(ticTacToe.length + " in a row!");  \n }',
   op0: "Line r1",
   op1: "Line r2",
   op2: "Line r3",
   op3: "None of the above",
   correcta: "1"
},

{
   
   pregunta: "What is the result of running the following as java Copier?    \n public static void main(String... original) {    \n String... copy = original; System.out.println(copy.length +  + copy[0]);    \n }",
   op0: "0",
   op1: "0 followed by an exception",
   op2: "1 followed by an exception",
   op3: "The code does not compile.",
   correcta: "3"
},

{
   
   pregunta: "What is the result of running the following program? \n public static void main(String[] args) {    \n int[][] game = new int[6][6]; game[3][3] = 6;    \n Object[] obj = game;    \n obj[3] = X;    \n System.out.println(game[3][3]); \n }",
   op0: "X",
   op1: "The code does not compile.",
   op2: "The code compiles but throws a NullPointerException at runtime.",
   op3: "The code compiles but throws a different exception at runtime.",
   correcta: "2"
},

{
   
   pregunta: 'What does the following output? \n public static void main(String[] args) { \n     String[] os = new String[] { "Mac", "Linux", "Windows" }; \n     Arrays.sort(os); \n     System.out.println(Arrays.binarySearch(os, "RedHat")); \n }',
   op0: "-1",
   op1: "-2",
   op2: "-3",
   op3: "The output is not defined.",
   correcta: "0"
},

{
  
   pregunta: "What is the output of the following when run as java FirstName Wolfie? \n public static void main(String... names) { \n System.out.println(names[0]); \n }",
   op0: "FirstName",
   op1: "Wolfie",
   op2: "The code throws an ArrayIndexOutOfBoundsException.",
   op3: "The code throws a NullPointerException.",
   correcta: "1"
},

{
   
   pregunta: "What is the output of the following when run as java Count 1 2? \n public static void main(String target[]) { \n System.out.println(target.length); \n }",
   op0: "0",
   op1: "1",
   op2: "2",
   op3: "The code does not compile.",
   correcta: "2"
},

{
   
   pregunta: "What is the output of the following when run as java unix.EchoFirst seed flower?    \n public static void main(String[] args) {    \n String one = args[0]; Arrays.sort(args); int result = Arrays.binarySearch(args, one); System.out.println(result); \n }",
   op0: "0",
   op1: "1",
   op2: "The code does not compile.",
   op3: "The code compiles but throws an exception at runtime.",
   correcta: "0"
},

{
   
   pregunta: "Which of these four array declarations produces a different array than the others?",
   op0: "int[][] nums = new int[2][1];",
   op1: "int[] nums[] = new int[2][1];",
   op2: "int[] nums[] = new int[][] { { 0 }, { 0 } };",
   op3: "int[] nums[] = new int[][] { { 0, 0 } };",
   correcta: "3"
},

{
   
   pregunta: "How do you access the array element with the value of \"z\"?",
   op0: "dimensions[\"three\"][2]",
   op1: "dimensions[\"three\"][3]",
   op2: "dimensions[2][2]",
   op3: "dimensions[3][3]",
   correcta: "2"
},

{
   
   pregunta: 'How many lines does the following code output?    \n public static void main(String[] args) {    \n String[] days = new String[] { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"     \n };        \n for (int i = 1; i <= days.length; i++)    \n System.out.println(days[i]);    \n },',
   op0: "Six",
   op1: "Seven",
   op2: "The code does not compile.",
   op3: "The code compiles but throws an exception at runtime.",
   correcta: "3"
},{
   pregunta: 'What happens when calling the following method with a non-null and non-empty array?","\npublic static void addStationName(String[] names){ \nnames[names.length] = "Times Square";}',
   op0: "It adds an element to the array the value of which is Times Square.",
   op1: "It replaces the last element in the array with the value Times Square.",
   op2: "It does not compile.",
   op3: "It throws an exception.",
   correcta: "3"
},

{
   
   pregunta: 'How many lines does the following code output?    \n public static void main(String[] args) {        \n String[] days = new String[] { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };        \n for (int i = 0; i < days.size(); i++)            \n System.out.println(days[i]);    \n }',
   op0: "Six",
   op1: "Seven",
   op2: "The code does not compile.",
   op3: "The code compiles but throws an exception at runtime.",
   correcta: "2"
},

{
   
   pregunta: "How many dimensions does the array reference moreBools allow?    \n public static void main(String[] args) {    \n boolean[][][] bools, moreBools;    \n }",
   op0: "One dimension",
   op1: "Two dimensions",
   op2: "Three dimensions",
   op3: "None of the above",
   correcta: "3"
},

{
   
   pregunta: "What is a possible output of the following code?    \n public static void main(String[] args) {        \n String[] strings = new String[2]; System.out.println(strings);    \n }",
   op0: "[null, null]",
   op1: "[,]",
   op2: "[Ljava.lang.String;@74a14482",
   op3: "None of the above",
   correcta: "2"
},

{
   
   pregunta: "Which is the first line to prevent this code from compiling and running without error?    \n public static void main(String[] args)\n {        \n char[][] ticTacToe = new char[3][3]; // r1ticTacToe[1][3] = 'X'; // r2ticTacToe[2][2] = 'X';ticTacToe[3][1] = 'X';System.out.println(ticTacToe.length +  in a row!);     \n }",
   op0: "Line r1",
   op1: "Line r2",
   op2: "Line r3",
   op3: "None of the above",
   correcta: "1"
},

{
   
   pregunta: "What is the result of running the following as java Copier?    \n public static void main(String... original) {        \n String... copy = original; System.out.println(copy.length +  + copy[0]);    \n }",
   op0: "0",
   op1: "0 followed by an exception",
   op2: "1 followed by an exception",
   op3: "The code does not compile.",
   correcta: "3"
},

{
   
   pregunta: 'What is the result of running the following program?    \n public static void main(String[] args) {        \n int[][] game = new int[6][6]; game[3][3] = 6;        \n Object[] obj = game;        \n obj[3] = "X";        \n System.out.println(game[3][3]);\n"    \n }',
   op0: "X",
   op1: "The code does not compile.",
   op2: "The code compiles but throws a NullPointerException at runtime.",
   op3: "The code compiles but throws a different exception at runtime.",
   correcta: "2"
},

{
   
   pregunta: 'What does the following output?    \n public static void main(String[] args) {        \n String[] os = new String[] { "Mac", "Linux", "Windows" };        \n Arrays.sort(os);        \n System.out.println(Arrays.binarySearch(os, "RedHat"));\n"    \n }',
   op0: "-1",
   op1: "-2",
   op2: "-3",
   op3: "The output is not defined.",
   correcta: "0"
},

{
  
   pregunta: "What is the output of the following when run as java FirstName Wolfie?    \n public static void main(String... names) {        \n System.out.println(names[0]);    \n }",
   op0: "FirstName",
   op1: "Wolfie",
   op2: "The code throws an ArrayIndexOutOfBoundsException.",
   op3: "The code throws a NullPointerException.",
   correcta: "1"
},

{
   
   pregunta: "What is the output of the following when run as java Count 1 2?    \n public static void main(String target[]) {        \n System.out.println(target.length);    \n }",
   op0: "0",
   op1: "1",
   op2: "2",
   op3: "The code does not compile.",
   correcta: "2"
},

{
   
   pregunta: "What is the output of the following when run as java unix.EchoFirst seed flower?    \npublic static void main(String[] args) {        \n String one = args[0]; Arrays.sort(args); int result = Arrays.binarySearch(args, one); System.out.println(result);    \n }",
   op0: "0",
   op1: "1",
   op2: "The code does not compile.",
   op3: "The code compiles but throws an exception at runtime.",
   correcta: "0"
},

{
   
   pregunta: "Which of these four array declarations produces a different array than the others?",
   op0: "int[][] nums = new int[2][1];",
   op1: "int[] nums[] = new int[2][1];",
   op2: "int[] nums[] = new int[][] { { 0 }, { 0 } };",
   op3: "int[] nums[] = new int[][] { { 0, 0 } };",
   correcta: "3"
},

{
   
   pregunta: "How do you access the array element with the value of \"z\"?",
   op0: "dimensions[\"three\"][2]",
   op1: "dimensions[\"three\"][3]",
   op2: "dimensions[2][2]",
   op3: "dimensions[3][3]",
   correcta: "2"
},

{
   
   pregunta: 'How many lines does the following code output?    \n public static void main(String[] args) {        \n String[] days = new String[] { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"     \n };        \n for (int i = 1; i <= days.length; i++)            \n System.out.println(days[i]);    \n }',
   op0: "Six",
   op1: "Seven",
   op2: "The code does not compile.",
   op3: "The code compiles but throws an exception at runtime.",
   correcta: "3"
},
{
       pregunta:"What is the output of the following when run as java FirstName Wolfie? \n public class FirstName {   public static void main(String... names) {      System.out.println(names[1]);   }}",
       op0:"FirstName",
       op1:"Wolfie",
       op2:"The code throws an ArrayIndexOutOfBoundsException.",
       op3:"The code throws a NullPointerException.",
       correcta:"1"
    },
{
       pregunta:"Which is the first line to prevent this code from compiling and running without error? \n char[][] ticTacToe = new char[3][3];                 // r1ticTacToe[0][0] = 'X';                               // r2ticTacToe[1][1] = 'X';ticTacToe[2][2] = 'X';System.out.println(ticTacToe.length   in a row!); // r3",
       op0:"Line    r1",
       op1:"Line    r2",
       op2:"Line    r3",
       op3:"None of the above",
       correcta:"1"
    },
{
       pregunta:"What is the output of the following when run as java Count 1 2? \n public class Count {   \n public static void main(String target[]) {      \n System.out.println(target.length());   }}",
       op0:"0",
       op1:"1",
       op2:"2",
       op3:"The code does not compile",
       correcta:"1"
    },
{
       pregunta:"How many dimensions does the array reference moreBools allow?boolean[][] bools[], moreBools;",
       op0:"One dimension",
       op1:"Two dimensions",
       op2:"Three dimensions",
       op3:"None of the above",
       correcta:"1"
    },
{
       pregunta:"What is the result of the following when called as java counting.Binary? \n package counting;import java.util.*;public class Binary {   \npublic static void main(String... args) {      \nArrays.sort(args);      \nSystem.out.println(Arrays.toString(args));   }}",
       op0:"null",
       op1:"[]",
       op2:"The code does not compile.",
       op3:"The code compiles but throws an exception at runtime.",
       correcta:"1"
    },
{
       pregunta:"What does the following output? \n String[] os = new String[] { Mac, Linux, Windows };\n System.out.println(Arrays.binarySearch(os, Linux));",
       op0:"0",
       op1:"1",
       op2:"2",
       op3:"The output is not defined.",
       correcta:"1"
    },
{
       pregunta:"What is the result of running the following program?\n 1:   package fun; \n 2:   public class Sudoku { \n3:      static int[][] game;4:5:      \n public static void main(String[] args) {6:         game[3][3] = 6;7:         Object[] obj = game;8:         game[3][3] =X;9:        \n System.out.println(game[3][3]);10:     }11:  }",
       op0:"X",
       op1:"The code does not compile.",
       op2:"The code compiles but throws a NullPointerException at runtime.",
       op3:"The code compiles but throws a different exception at runtime.",
       correcta:"1"
    },
{
       pregunta:"43.What is the output of the following? \n String[][] listing = new String[][] { { Book }, { Game, 299 } }; \n System.out.println(listing.length +  + listing[0].length);",
       op0:"2 1",
       op1:"2 2",
       op2:"The code does not compile.",
       op3:"The code compiles but throws an exception at runtime.",
       correcta:"1"
    },
{
       pregunta:"What is the output of the following when run as java FirstName? \n public class FirstName {   \n public static void main(String[] names) {      \n System.out.println(names[0]);   }}",
       op0:"FirstName",
       op1:"The code does not compile.",
       op2:"The code throws an ArrayIndexOutOfBoundsException.",
       op3:"The code throws a NullPointerException.",
       correcta:"1"
    },
{
       pregunta:"How many lines does the following code output? \n String[] days = new String[] { Sunday, Monday, Tuesday,      Wednesday, Thursday, Friday, Saturday }; \n for (int i = 1; i < days.length; i++)      \n System.out.println(days[i]);",
       op0:"Six",
       op1:"Seven",
       op2:"The code does not compile.",
       op3:"The code compiles but throws an exception at runtime.",
       correcta:"1"
    },
{
       pregunta:"What is the output of the following when run as java Count 1 ? \n public class Count {   \n public static void main(String target[]) {      \n System.out.println(target.length);   }}",
       op0:"0",
       op1:"1",
       op2:"2",
       op3:"The code does not compile.",
       correcta:"1"
    },
{
       pregunta:"What does the following output? \nString[] os = new String[] { Linux, Mac, Windows }; \n System.out.println(Arrays.binarySearch(os, Linux));",
       op0:"0",
       op1:"1",
       op2:"2",
       op3:"The output is not defined.",
       correcta:"1"
    },
{
       pregunta:"Which of the following statements are true? \n I.You can always change a method signature from call(String[] arg) to call(String... arg) without causing a compiler error in the calling code.II.You can always change a method signature from call(String... arg) to call(String[] arg) without causing a compiler error in the existing code.",
       op0:"I",
       op1:"II",
       op2:"Both I and II",
       op3:"Neither I nor II",
       correcta:"1"
    },
{
       pregunta:"Which of these four array references can point to an array that is different from the others?",
       op0:"int[][][][] nums1a, nums1b;",
       op1:"int[][][] nums2a[], nums2b;",
       op2:"int[][] nums3a[][], nums3b[][];",
       op3:"int[] nums4a[][][], numbs4b[][][];",
       correcta:"1"
    },
{
       pregunta:"What is the output of the following when run as java unix.EchoFirst seed flower?\n package unix;import java.util.*;public class EchoFirst {   \n public static void main(String[] args) {      Arrays.sort(args);      String result = Arrays.binarySearch(args, args[0]);      System.out.println(result);  }}",
       op0:"1",
       op1:"0",
       op2:"The code does not compile.",
       op3:"The code compiles but throws an exception at runtime.",
       correcta:"1"
    },
{
pregunta:"Which type of loop is best known for its boolean condition that controls entry to the loop?",
op0:"do-while loop",
op1:"for (traditional)",
op2:"for-each",
op3:"while",
correcta:"0"
},

{
pregunta:"which type of loop is best known for using an index or counter?",
op0:"do-while loop",
op1:"for (traditional)",
op2:"for-each",
op3:"while",
correcta:"2"
},

{
pregunta:"which type of loop is guaranteed to have the body execute at least once?",
op0:"do-while loop",
op1:"for (traditional)",
op2:"for-each",
op3:"while",
correcta:"2"
},

{
pregunta:"which of the following can loop through an array without referring to the elements by index?",
op0:"do-while loop",
op1:"for (traditional)",
op2:"for-each",
op3:"while",
correcta:"3"
},

{
pregunta:"what keyword is used to end the current loop iteration and proceed execution with the next iteration of that loop?",
op0:"break",
op1:"continue",
op2:"end",
op3:"skip",
correcta:"0"
},

{
pregunta:"what keyword is used to proceed with execution immediately after a loop?",
op0:"break",
op1:"continue",
op2:"end",
op3:"skip",
correcta:"0"
},

{
pregunta:"which type of loophas three segments within parentheses?",
op0:"do-while loop",
op1:"for (traditional)",
op2:"for-each",
op3:"while",
correcta:"1"
},

{
pregunta:"which of the following statements is/are true?",
op0:"only I",
op1:"only II",
op2:"both statements",
op3:"neither statements",
correcta:"1"
},

{
pregunta:"which of the following statements is/are true?",
op0:"only I",
op1:"only II",
op2:"both statements",
op3:"neither statements",
correcta:"1"
},

{
pregunta:"which type of loop has a boolean condition that is first checked after a single iteration through the loop?",
op0:"do-while loop",
op1:"for (traditional)",
op2:"for-each",
op3:"while",
correcta:"2"
},

{
pregunta:"what does the following code output? \n int singer = 0; \n while (singer)  \n system.out.println(singer++);",
op0:"0",
op1:"the code does not compile",
op2:"the loops complete with no output",
op3:"this is an infinite loop",
correcta:"3"
},

{
pregunta:'what does the following code output? \n list<string> drinks = arrays.asList("can", "cup"); \n for (int container = drinks.size() -1; container >=0; container--)  \n system.out.print(drinks.get(container) + ",");',
op0:"can, cup,",
op1:"cup, can,",
op2:"the code does not compile",
op3:"none of the above",
correcta:"1"
},

{
pregunta:'what does the following code output? \n public static void main(string[] args) { \n  List<string> bottles = arrays.asList("glass", "plastic"); \n  for (int type = 0; type <bottles.size();) { \n   system.out.print(bottles.get(type) + ","); \n   break; \n  } \n  system.out.print ("end"); \n }',
op0:"glass,end",
op1:"glass,plastic,end",
op2:"the code does not compile",
op3:"none of the above",
correcta:"3"
},

{
pregunta:'what does the following code output? \n string letters = ""; \n while (letters.length() != 2) \n   letters+="a"; \n system.out.println(letters);',
op0:"aa",
op1:"aaa",
op2:"the loops complete with no output",
op3:"this is an infinite loop",
correcta:"2"
},

{
pregunta:'what is the result of the following when run with java peregrine. TimeLoop september 3 1940?; \n package peregrine; \n public class TimeLoop { \n  public static void main (string[] args) { \n   for (int i = args.length; i>0; i++) \n     system.out.println("args"); \n  } \n }',
op0:"args",
op1:"argsargs",
op2:"the code does not compile",
op3:"none of the above",
correcta:"0"
},
{
   pregunta:'What is the output of the following code?\n package chicago; \n public class Loop { \n  private static int count; \n  private static String[] stops = new String[] { "Washington", \n  "Monroe", "Jackson", "LaSalle" }; \n  public static void main(String[] args) { \n  while (count < stops.length) { \n  if (stops[count++].length() < 8) { \n  break; \n  } \n  } \n  System.out.println(count); \n  } \n } ',
   op0:"1",
   op1:"2",
   op2:"4",
   op3:"The code does not compile",
   correcta:"1"
},

{
   pregunta:"What is the result of the following code?\n do { \n  int count = 0; \n  do { \n  count++; \n  } while (count < 2); \n  break; \n } while (true); \n System.out.println(count);",
   op0:"2",
   op1:"3",
   op2:"The code does not compile",
   op3:"This is an infinite loop",
   correcta:"2"
},

{
   pregunta:"Which of the following segments of a for loop can be left blank? \n for (segmentA; segmentB; segmentC) { \n } \n WOW! eBook \n ",
   op0:"segmentA",
   op1:"segmentB",
   op2:"segmentC",
   op3:"All of the above",
   correcta:"3"
},

{
   pregunta:"How many of the loop types (while, do while, traditional for, and enhanced for) allow you to write code that creates an infinite loop?",
   op0:"one",
   op1:"Two",
   op2:"Three",
   op3:"Four",
   correcta:"2"
},

{
   pregunta:'What is the output of the following? List<String> drinks = Arrays.asList("can", "cup");for (int container = 0; container < drinks.size(); container++) \n  System.out.print(drinks.get(container) + ",");',
   op0:"can,cup",
   op1:"cup,can",
   op2:"The code does not compile",
   op3:"None of the above",
   correcta:"0"
},

{
   pregunta:' What happens when running the following code?\n do ( \n  System.out.println("helium"); \n ) while (false);',
   op0:" It completes successfully without output.",
   op1:"It outputs helium once.",
   op2:"It keeps outputting helium.",
   op3:"The code does not compile.",
   correcta:"3"
},

{
   pregunta:"Which of the following is equivalent to this code snippet given an array of String objects?\n for (int i=0; i<fun.length; i++) \n  System.out.println(fun[i]);",
   op0:"for (String f = fun) System.out.println(f);",
   op1:"for (String f : fun) System.out.println(f);",
   op2:"for (String = fun) System.out.println(it);",
   op3:"None of the above",
   correcta:"1"
},

{
   pregunta:"How many of these statements can be inserted after the println to have the code flow \n follow the arrow in this diagram? \n break; \n break letters; \n break numbers; \n letters: for (char ch=ˈaˈ; ch<=ˈzˈ; ch++) { \n numbers: for (int n=0; n<=10; n++) { \n System.out.println(ch); \n } \n }",
   op0:"None",
   op1:"One",
   op2:"Two",
   op3:"Three",
   correcta:"2"
},

{
   pregunta:"Using the diagram in the previous question, how many of these statements can be inserted \n after the println to have the code flow follow the arrow in the diagram? \n continue; \n continue letters; \n continue numbers;",
   op0:"None",
   op1:"One",
   op2:"Two",
   op3:"Three",
   correcta:"1"
},

{
   pregunta:"What does the following code output? \n int singer = 0; \n while (singer > 0) \n  System.out.println(singer++);",
   op0:"0",
   op1:"The code does not compile",
   op2:"The loops completes with no output",
   op3:"This is an infinite loop",
   correcta:"2"
},

{
   pregunta:"Which of the following types is taxis not allowed to be in order for this code to compile? \n for (Object obj : taxis) { \n }",
   op0:"ArrayList<Integer>",
   op1:"int[]",
   op2:"StringBuilder",
   op3:"All of these are allowed.",
   correcta:"2"
},

{
   pregunta:'What is the output of the following? \n boolean balloonInflated = false; \n do { \n  if (!balloonInflated) { \n  balloonInflated = true; \n  System.out.print("inflate-"); \n  } \n } while (! balloonInflated); \n System.out.println("done");',
   op0:"done",
   op1:"inflate-done",
   op2:"The code does not compile",
   op3:"This is an infinite loop",
   correcta:"1"
},

{
   pregunta:'What does the following code output? \n String letters = ""; \n while (letters.length() != 3) \n  letters+="ab"; \n System.out.println(letters);',
   op0:"ab",
   op1:"abab",
   op2:"The loop completes with no output",
   op3:"This is an infinite loop",
   correcta:"3"
},

{
   pregunta:"What describes the order in which the three expressions appear in a for loop?",
   op0:" boolean conditional, initialization expression, update statement",
   op1:"initialization expression, boolean conditional, update statement",
   op2:"initialization expression, update statement, boolean conditional",
   op3:"None of the above",
   correcta:"1"
},


{
   pregunta:"What is the result of the following? \n int count = 10; \n List<Character> chars = new ArrayList<>(); \n do {chars.add('a'); \n for (Character x : chars) count -=1; \n } while (count > 0); \n System.out.println(chars.size());",
   op0:"3",
   op1:"4",
   op2:"The code does not compile",
   op3:"None of the above",
   correcta:"1"
},
{
       pregunta:"What is the result of the following? ",
       op0:"1",
       op1:"2",
       op2:"3",
       op3:"4",
       correcta:"3"
},

{
       pregunta:"Which of the following is equivalent to this code snippet given an array of String objects?\n for (int i=fun.length-1; i>=0; i--) \n System.out.println(fun[i]);",
       op0:"for (String f = fun) System.out.println(f);",
       op1:"for (String f : fun) System.out.println(f);",
       op2:"for (String f fun) System.out.println(it);",
       op3:"None of the above",
       correcta:"1"
},

{
       pregunta:'What does the following code output?\n public static void main(String[] args) { \n List<String> bottles = Arrays.asList("glass", "plastic"); \n for (int type = 0; type < bottles.size();) \n System.out.print(bottles.get(type) + ","); \n break; \n System.out.print("end");\n }',
       op0:"glass,end",
       op1:"glass,plastic,end",
       op2:"The code does not compile",
       op3:"None of the above",
       correcta:"0"
},




{
       pregunta:'What is the result of the following? \n String[] nycTourLoops = new String[] { "Downtown", "Uptown", "Brooklyn" };\n String[] times = new String[] { "Day", "Night" };\n for (int i = 0, j = 0; i < nycTourLoops.length\n && j < times.length; i++; j++)\n { System.out.print(nycTourLoops[i] + " " + times[j] + "-");\n }',
       op0:"Downtown Day-",
       op1:"Downtown Day-Uptown Night-",
       op2:"The code does not compile.",
       op3:"The code compiles but throws an exception at runtime.",
       correcta:"2"
},


{
       pregunta:"What is the result of the following when run with\n java peregrine.TimeLoop September 3 1940?\n package peregrine;\n public class TimeLoop {\n public static void main(String[] args) {\n for (int i = args.length; i>=0; i--)\n System.out.println(args[i]);\n }\n }\n",
       op0:"september",
       op1:"1940",
       op2:"the code does not compile",
       op3:"none of the abode",
       correcta:"2"
},


{
       pregunta:'What is the output of the following?\n public class Shoelaces {\n public static void main(String[] args) {\n String tie = null;\n while (tie == null)\n tie = "shoelace";\n System.out.print(tie);\n }\n }',
       op0:"null",
       op1:"shelace",
       op2:"shoelaseshoelase",
       op3:"none of the abode",
       correcta:"1"
},


{
       pregunta:'The following code outputs a single letter x. What happens if you remove lines 25 and 28?\n 23: String race = "";\n 24: loop:\n 25: do {\n 26: race += "x";\n 27: break loop;\n 28: } while (true);\n 29: System.out.println(race);',
       op0:"It prints an empty string",
       op1:"It still outputs a single letter x",
       op2:". It no longer compiles.",
       op3:". It becomes an infinite loop.",
       correcta:"1"
},



{
       pregunta:'What is the output of the following code?\n package chicago;\n public class Loop {\n private static int count;\n private static String[] stops = new String[] { "Washington",\n "Monroe", "Jackson", "LaSalle" };\n public static void main(String[] args) {\n while (count < stops.length) {\n if (stops[count++].length() < 8) {\n continue;\n }\n }\n System.out.println(count);\n }\n }',
       op0:"1",
       op1:"2",
       op2:"4",
       op3:"the code does not compile",
       correcta:"3"
},

{
       pregunta:'What is the output of the following?\n StringBuilder builder = new StringBuilder();\n String str = new String("Leaves growing");\n do {\n System.out.println(str);\n } while (builder);\n System.out.println(builder);',
       op0:"Leaves growing",
       op1:"This is an infinite loop.",
       op2:"The code does not compile.",
       op3:"The code compiles but throws an exception at runtime.",
       correcta:"2"
},

{
       pregunta:"What is the result of the following code? 6: int count = 0;\n 7: do {\n 8: do {\n 9: count++;\n 10: } while (count < 2);\n 11: break;\n 12: } while (true);\n 13: System.out.println(count);",
       op0:"2",
       op1:"3",
       op2:"The code does not compile.",
       op3:"This is an infinite loop.",
       correcta:"1"
   },

{
       pregunta:"Fill in the blank so this code compiles and does not cause an infinite loop.\n t: while (true) {\n f: while(true) {\n }\n }",
       op0:"break;",
       op1:". break f;",
       op2:"break t;",
       op3:"None of the above",
       correcta:"1"
},

{
       pregunta:'What is the result of the following?\n String[] nycTourLoops = new String[] { "Downtown", "Uptown", "Brooklyn" };\n String[] times = new String[] { "Day", "Night" };\n for (int i = 0, j = 0; i < nycTourLoops.length\n && j < times.length; i++, j++)\n {\n System.out.print(nycTourLoops[i] + " " + times[j] + "-");\n }',
       op0:"Downtown Day-",
       op1:"Downtown Day-Uptown Night-",
       op2:"The code does not compile.",
       op3:"The code compiles but throws an exception at runtime.",
       correcta:"1"
},

{
       pregunta:'How many lines does the following code output?\n import java.util.*;\n public class Exams {\n public static void main(String[] args) {\n List<String> exams = Arrays.asList("OCA", "OCP");\n for (String e1 : exams)\n for (String e2 : exams)\n System.out.println(e1 + " " + e2);\n }\n }',
       op0:"one",
       op1:"four",
       op2:"The code does not compile.",
       op3:"The code compiles but throws an exception at runtime.",
       correcta:"1"
},


{
       pregunta:"Which of the following best describes the flow of execution in thisforloop if beta always\n returns false?\n for (alpha; beta; gamma) {\n delta;\n }",
       op0:"alpha",
       op1:"alpha,beta",
       op2:"alpha, beta, gamma",
       op3:"None of the above",
       correcta:"1"
},
{
    pregunta:"Which of the following best describes the flow of execution in this for loop if the loop body is run exactly once?\nfor (alpha; beta; gamma) { \n delta;\n}",
    op0: "alpha, delta, gamma, beta",
    op1: "alpha, beta, delta, gamma, beta",
    op2: "alpha, delta, gamma, alpha, beta",
    op3: "alpha, beta, delta, gamma, alpha, beta",
    correcta:"2"
},
{
    pregunta:"Which of the following iterates a different number of times than the others?",
    op0:"for (int k=0; k < 5; k++) {}",
    op1:"for (int k=1; k <= 5; k++) {}",
    op2:"int k=0; do { } while(k++ < 5)",
    op3:"int k=0; while (k++ < 5) {}",
    correcta:"3"
},
{
    pregunta:"What is the output of the following?public class Shoelaces {public static void main(String[] args) {String tie = null;while (tie == null);tie = shoelace;System.out.print(tie);}}",
    op0:"null",
    op1:"shoelace",
    op2:"shoelaceshoelace",
    op3:"None of the above",
    correcta:"3"
},
{
    pregunta:"What is the output of the following?int result = 8;for: while (result > 7) {result++;do {result--;} while (result > 5);break for;System.out.println(result);",
    op0:"5",
    op1:"8",
    op2:"The code does not compile",
    op3:"The code compiles but throws an exception at runtime",
    correcta:"1"
},
{
    pregunta:"What is the output of the following?boolean baloonInflated = false;do {if (!baloonInflated) {baloonInflated = true;System.out.print(inflate-);}} while (baloonInflated);System.out.println(done);",
    op0:"done",
    op1:"inflate-done",
    op2:"The code does not compile",
    op3:"This is an infinite loop",
    correcta:"0"
},
{
    pregunta:"Which of the following can fill in the blank to have the code compile successfully?package nyc;public class TouristBus {public static void main(String... args) {String[] nycTourLoops = new String[] { Downtown, Uptown, Brooklyn };String[] times = new String[] { Day, Night };for ( i < 1; i++, j++)System.out.println(nycTourLoops[i] +  + times[j]);}}",
    op0:"int i=0; j=0",
    op1:"int i=0, j=0",
    op2:"int i=0; int j=0",
    op3:"int i=0, int j=0",
    correcta:"2"
},
{
    pregunta:"Fill in the blanks: The access modifier allows access to everything the access modifier does and more",
    op0:"package-private, protected",
    op1:"protected, public",
    op2:"protected, package-private",
    op3:"private, package-private",
    correcta:"2"
},
{
    pregunta:" What is the command to call one constructor from another constructor in the same class?",
    op0:"super()",
    op1:"this()",
    op2:"that()",
    op3:"construct()",
    correcta:"1"
},
{
    pregunta:"What is the output of the following application?package stocks;public class Bond {private static int price = 5;public boolean sell() {if(price<10) {price++;return true;} else if(price>=10) {return false;}}public static void main(String[] cash) {new Bond().sell();new Bond().sell();new Bond().sell();System.out.print(price);}}",
    op0:"5",
    op1:"6",
    op2:"8",
    op3:"The code does not compile",
    correcta:"3"
},
{
    pregunta:"What is true about the following program?package figures;public class Dolls {public void nested() { nested(2,true); } // g1public int nested(int level, boolean height) { return nested(level); }public int nested(int level) { return level+1; }; // g2public static void main(String[] outOfTheBox) {System.out.print(new Dolls().nested());}}",
    op0:"It compiles successfully and prints 3 at runtime",
    op1:"It does not compile because of line g1",
    op2:"It does not compile because of line g2",
    op3:"It does not compile for some other reason",
    correcta:"2"
},
{
    pregunta:"Fill in the blank: Java uses to send data into a method",
    op0:"pass-by-null",
    op1:"pass-by-null",
    op2:"both pass-by-value and pass-by-reference",
    op3:"pass-by-reference",
    correcta:"1"
},

//CARINA 


//
{        
    pregunta:"Which of the following is a valid JavaBean method signature?",         
    op0:"public void getArrow()",         
    op1:"public void setBow()",         
    op2:"public void setRange(int range)",         
    op3:"public String addTarget(String target)",         
    correcta:"3"
},
{         
    pregunta:"Which of the following statements about calling this() in a constructor is not true?",         
    op0:"If    this() is used, it must be the first line of the constructor.",         
    op1:"If    super() and this() are both used in the same constructor, super() must appear on the line immediately after this().",         
    op2:"If arguments are provided to this(), then there must be a constructor in the class able to take those arguments.",         
    op3:"If the no-argument this() is called, then the class must explicitly implement the  no-argument constructor.",         
    correcta:"1"
},
{         
    pregunta:"Which of the following can fill in the blank to make the class compile?",         
    op0:"Public int",         
    op1:"Long",         
    op2:"void",         
    op3:"private String",         
    correcta:"2"
},
{         
    pregunta:"Fill in the blank: A  variable is always available to all instances of the class.?",         
    op0:"public",         
    op1:"local",         
    op2:"static",         
    op3:"instance",         
    correcta:"1"
},
{         
    pregunta:"Which line of code, inserted at line p1, causes the application to print 5?",         
    op0:"this(4);",         
    op1:"new Jump(4);",         
    op2:"this(5);",         
    op3:"rope = 4;",         
    correcta:"3"
},
{     
    pregunta:"Which of the following statements is not true?",         
    op0:"An instance of one class may access an instance of another class’s attributes if it has a reference to the instance and the attributes are declared public.",         
    op1:"An instance of one class may access package-private attributes in a parent class, pro-vided the parent class is not in the same package.",         
    op2:"Two instances of the same class may access each other’s private attributes.",         
    op3:"An instance of one class may access an instance of another class’s attributes if both classes are located in the same package and marked protected.",         
    correcta:"2"     
 },
{        
    pregunta:"Given the following class, what should be inserted into the two blanks to ensure the class data is properly encapsulated?",        
    op0:"public and getStuff",         
    op1:"private and isStuff",         
    op2:"public and setStuff",         
    op3:"None of the above",         
    correcta:"0"     
},
{         
    pregunta:"Which statement about a no-argument constructor is true?",         
    op0:"The Java compiler will always insert a default no-argument constructor if you do not define a no-argument constructor in your class.",         
    op1:"In order for a class to call super() in one of its constructors, its parent class must explicitly implement a no-argument constructor.",         
    op2:"If a class extends another class that has only one constructor that takes a value, then the child class must explicitly declare at least one constructor.",         
    op3:"A class may contain more than one no-argument constructor.",         
    correcta:"3"     
},
{         
    pregunta:"Which of the following method signatures does not contain a compiler error?",         
    op0:"public void sing(String key, String... harmonies)",         
    op1:"public void sing(int note, String... sound, int music)",         
    op2:"public void sing(String... keys, String... pitches)",         
    op3:"public void sing(String... notes, String melodies)",         
    correcta:"0"     
},
{        
    pregunta:"Given the following application, which diagram best represents the state of the mySkier, mySpeed, and myName variables in the main() method after the call to the slalom()method?",         
    op0:"D",         
    op1:"A",         
    op2:"B",         
    op3:"C",         
    correcta:"D"     
},




//DULCE


{
    pregunta:"Given the class below, which method signature could be successfully added to the class as an overloaded version of the findAverage() method ? \npublic class Calculations { \n  public Integer findAverage(int sum) { return sum; }\n}",
    op0:" public Long findAverage(int sum) ",
    op1:"public Long findAverage(int sum, int divisor)",
    op2:" public Integer average(int sum)",
    op3:" private void findAverage(int sum)",
    correcta:"1"
},

{       
    Pregunta: "Which of the following is not a reason to use encapsulation when designing a class?",
    op0:" Promote usability by other developers",
    op1:" Maintain class data integrity of data elements",
    op2:" Prevent users from modifying the internal attributes of a class",
    op3:" Increase concurrency and improve performance",
    correcta:"1"
},

{
    Pregunta: "Which of the following data types can be modified after they are passed to a method as an argument?",
    op0:" int[]",
    op1:" String",
    op2:" long",
    op3:" boolean",
    correcta:"1"
},


{
    Pregunta: "What is the best way to call the following method from another class in the same package, assuming the class using the method does not have any static imports? package useful public class MathHelper {\npublic static int roundValue(double d)    { \n // Implementation omitted \n}\n}",
    op0:" MathHelper:roundValue(5.92)",
    op1:" MathHelper.roundValue(3.1)",
    op2:" roundValue(4.1)",
    op3:" useful.MathHelper.roundValue(65.3)",
    correcta:"1"
},

{
    Pregunta: "Given a method with one of the following return types, which data type prevents the return statement from being used within the method?",
    op0:" byte",
    op1:" String",
    op2:" void",
    op3:" None of the above",
    correcta:"2 " 
},


{
    Pregunta: "How many final modifiers would need to be removed for this application to compile? \npackage end;\npublic final class Games { \npublic final static int finish(final int score) {  \nfinal int win = 3;   \nfinal int result = score++ < 5 ? 2 : win;   \nreturn result+=win;\n} \npublic static void main(final String[] v) {  \nSystem.out.print(finish(Integer.parseInt(v[0]))); \n}\n}",
    op0:" None",
    op1:" One",
    op2:" Two",
    op3:" The code will not compile regardless of the number of final modifiers that are removed.",
    correcta:" 0 "
},

{
    Pregunta:"Fill in the blanks:               is used to call a constructor in the parent class, while               is used to reference a member of the parent class.",
    op0:" super and this()",
    op1:" super and super()", 
    op2:" super() and this",
    op3:" super() and super",
    correcta:"2 "
},


{
    Pregunta:"Given the following method signature, which classes can call it? \nvoid run(String government)",
    op0:" Classes in other packages",
    op1:" Classes in the same package", 
    op2:" Subclasses in a different package",
    op3:" All classes",
    correcta:" 1 "
},
{
    Pregunta:"Which statement(s) about the following class would help to properly encapsulate the data in the class?  \npackage shield;\npublic class Protect {   \nprivate String material;\nprotected int strength;\npublic int getStrength() {\nreturn strength;\n}\npublic void setStrength(int strength) {\nthis.strength = strength; \n}\n} \nI.Change the access modifier of strength to private. \nII.Add a getter method for material.\nIII.Add a setter method for material.",
    op0:" I",
    op1:"II and III ", 
    op2:" I, II, and III",
    op3:" None, the data in the class is already encapsulated.",
    correcta:" 1"
},
{
    Pregunta: "Which of the following is a valid method name in Java?",
    op0:" Go_$Outside$2()",
    op1:" have-Fun()", 
    op2:" new()",
    op3:" 9enjoyTheWeather()",
    correcta:" 0"
},

{
    Pregunta:"Which of the following lines of code can be inserted in the line below that would allow the class to compile?\npackage farm;\npublic class Coop { \npublic final int static getNumberOfChickens() {  \n// INSERT CODE HERE  \n}\n}",
    op0:" return 3.0;",
    op1:" return 5L;", 
    op2:" return 10;",
    op3:" None of the above",
    correcta:"2 "
},
{
    Pregunta: "Which of the following is a true statement about passing data to a method?",
    op0:" A change made to a primitive value passed to a method is reflected in the calling method.",
    op1:" A change made to the data within an object passed to a method is reflected in the calling  method. ", 
    op2:" Reassigning an object reference passed to a method is reflected in the calling method",
    op3:" A change made to a boolean value passed to a method is reflected in the calling method.",
    correcta:" 1 "
},



//geral
{
    pregunta:"Given the following method declaration, which line can be inserted to make the code compile?",
    op0:"return new Integer(3);",
    op1:"return new Byte((byte)6);",
    op2:"return new",
    op3:"Short(4).longValue();",
    correcta:"3"
},
{
    pregunta:"Which of the following statements about overloaded methods are true? +I.Overloaded methods must have the same namez.+ II.Overloaded methods must have the same return type."+ "III.Overloaded methods must have a different list of parameters",

    op0:"I",
    op1:"I and II",
    op2:"I and III",
    op3:"I, II, and III",
    correcta:"1"
},
{
    pregunta:"How many lines of code would need to be removed for the following class to compile? + package work; + public class Week {" +   "private static final String monday;" +   "String tuesday;"  +   "final static wednesday = 3;"+ "final protected int thursday = 4;"+ "}",
    op0:"one",
    op1:"two",
    op2:"Three",
    op3:"The code will not compile regardless of the number of lines removed.",
    correcta:"0"
},
{
    pregunta:"What is the output of the following application?",

    op0:"2",
    op1:"It does not compile because of line q1.",
    op2:"It does not compile because of line q2",
    op3:".It does not compile because of line q3",
    correcta:"3"
},
 
{
    pregunta:"Fill in the blanks: The  access modifier allows access to everything the  access modifier does and ",
    op0:"public, private",
    op1:"private, package-private",
    op2:"package-private projected",
    op3:"private, public",
    correcta:"5"
},

//SAMUEL 

{
    pregunta:"What is the output of the following application?package ship;public class Phone {   private int size;   public Phone(int size) {this.size=size;}   public static void sendHome(Phone p, int newSize) {      p = new Phone(newSize);      p.size = 4;   }   public static final void main(String... params) {      final Phone phone = new Phone(3);      sendHome(phone,7);      System.out.print(phone.size);   }}",
    op0:"3",
    op1:"4",
    op2:"7",
    op3:"The code does not compile.",
    correcta:"0"
},
{
    pregunta:"Given the following class, which line of code when inserted below would prevent the class from compiling? public class Drink {   public static void water() {}   public void get() {      // INSERT CODE HERE   }}",
    op0:"water();",
    op1:"this.Drink.water();",
    op2:"this.water();",
    op3:"Drink.water();",
    correcta:"1"
},
{
    pregunta:"Given the following method declaration signature, which of the following is a valid call of this method? public void call(int count, String me, String... data)",
    op0:"call(9,\"me\",10,\"Al\")",
    op1:"call(5)",
    op2:"call(2,\"home\",\"sweet\")",
    op3:"call(\"answering\",\"service\")",
    correcta:"2"
},
{
    pregunta:"Which statement about a static variable is true?",
    op0:"The value of a static variable must be set when the variable is declared or in a staticinitialization block.",
    op1:"It is not possible to read static final variables outside the class in which they are defined.",
    op2:"It is not possible to reference static methods using static imports.",
    op3:"A static variable is always available in all instances of the class.",
    correcta:"3"
},
{
    pregunta:"Which of the following is not a true statement?",
    op0:"The first line of every constructor is a call to the parent constructor via the super()command.",
    op1:"A class does not have to have a constructor explicitly defined.",
    op2:"A constructor may pass arguments to the parent constructor.",
    op3:"A final instance variable whose value is not set when they are declared or in an ini-tialization block should be set by the constructor.",
    correcta:"0"
},
{
    pregunta:"How many final modifiers would need to be removed for this application to compile? package park;public class Tree {   public final static long numberOfTrees;   public final double height;   static {}   { final int initHeight = 2;     height = initHeight;   }   static {      numberOfTrees = 100;      height = 4;   }}",
    op0:"None",
    op1:"One",
    op2:"Two",
    op3:"The code will not compile regardless of the number of final modifiers removed.",
    correcta:"3"
},
{
    pregunta:"What is the output of the following application? package jungle;public class RainForest extends Forest {   public RainForest(long treeCount) {      this.treeCount = treeCount+1;   }   public static void main(String[] birds) {      System.out.print(new RainForest(5).treeCount);   }}class Forest {   public long treeCount;   public Forest(long treeCount) {      this.treeCount = treeCount+2;   }}",
    op0:"5",
    op1:"6",
    op2:"8",
    op3:"The code does not compile.",
    correcta:"3"
},
{
    pregunta:"What is the output of thr following application? public class ChooseWisely {   public ChooseWisely() { super(); }   public int choose(int choice) { return 5; }   public int choose(short choice) { return 2; }   public int choose(long choice) { return 11; }   public static void main(String[] path) {      System.out.print(new ChooseWisely().choose((byte)2+1));   }}",
    op0:"5",
    op1:"2",
    op2:"11",
    op3:"The code does not compile.",
    correcta:"0"
},
{
    pregunta:"What is the outpot of the following application? package sports;public class Football {   public static Long getScore(Long timeRemaining) {      return 2*timeRemaining; // m1   }   public static void main(String[] refs) {      final int startTime = 4;      System.out.print(getScore(startTime)); // m2   }}",
    op0:"8",
    op1:"The code does not compile because of line m1.",
    op2:"The code does not compile because of line m2.",
    op3:"The code compiles but throws an exception at runtime.",
    correcta:"2"
},
{
    pregunta:"Which of the following is a valid method name in java?",
    op0:"$sprint()",
    op1:"\jog13()",
    op2:"walk#()",
    op3:"%run()",
    correcta:"0"
},



//ALAN 
{
    Pregunta: "What is the output of the following application?",
    Op0:"Only subclasses of Bouncer",
    Op1:"Any subclass of Bouncer or any class in the same package as Bouncer",
    Op2:"Only classes in the same package as Bouncer",
    Op3:"Any superclass of Bouncer",
    correcta:"0"
},
{
    Pregunta:"Given the following two classes, each in a different package, which line inserted below allows the second class to compile?",

    Op0:"import static commerce.Bank.*;",
    Op1:"static import commerce.Bank.*;",
    Op2:"import static commerce.Bank;",
    Op3:"None of the above",
    Correcta:"4"
},

{
    Pregunta:"How many lines of the following program contain compilation errors? \npackage theater;\nclass Cinema { \nprivate String name; \npublic Cinema(String name) {this.name = name;}\n}\npublic class Movie extends Cinema { \npublic Movie(String movie) {} \npublic static void main(String[] showing) {      System.out.print(new Movie(Another Trilogy).name); }\n}",
    Op0:"None",
    Op1:"One",
    Op2:"Two",
    Op3:"Three",
    Correcta: "0"
},


{   
    Pregunta:"Which modifier can be applied to an abstract interface method?",
    Op0:"protected",
    Op1:" static",
    Op2:"final",
    Op3:"public",
    Correcta:"3"
},

{   
    Pregunta:"What is the output of the following application?\npackage radio;\npublic class Song { \npublic void playMusic() { \nSystem.out.print(Play!);\n}  \nrivate static int playMusic() {   \nSystem.out.print(Music!); \n}  \npublic static void main(String[] tracks) {  \nnew Song().playMusic();  \n}\n}",
    Op0:"Play!",
    Op1:"Music!",
    Op2:"The code does not compile.",
    Op3:"The code compiles but the answer cannot be determined until runtime.",
    Correcta:"0"
},


{   
    Pregunta:"Which of the following statements about inheritance is true?",
    Op0:"Inheritance allows objects to access commonly used attributes and methods.",
    Op1:"Inheritance always leads to simpler code",
    Op2:"All primitives and objects inherit a set of methods.",
    Op3:"Inheritance allows you to write methods that reference themselves.",
    Correcta:"1"
},

{   
    Pregunta:"Given the class declaration below, which value cannot be inserted into the blank line that would allow the code to compile?\npackage mammal;\ninterface Pet {}\npublic class Canine implements Pet {\npublic  getDoggy() {\nreturn this;\n}\n}",
    Op0:"Class",
    Op1:"Pet",
    Op2:"Canine",
    Op3:"Object",
    Correcta:"0"
},

{   
    Pregunta:"Imagine you are working with another team to build an application. You are developing code that uses a class that the other team has not finished writing yet. Which element of Java would best facilitate this development, allowing easy integration once the other team’s code is complete?",
    Op0: "An abstract class",
    Op1:"An interface",
    Op2:" static methods",
    Op3:" An access modifier",
    Correcta:"1"
},

{   
    Pregunta:"What is the output of the following application?\npackage vehicles;\nclass Automobile {\nprivate final String drive() { return Driving vehicle; }\n} \nclass Car extends Automobile {\nprotected String drive() { return Driving car; }\n}\npublic class ElectricCar extends Car {\npublic final String drive() { return Driving electric car; }\npublic static void main(String[] wheels) {\nfinal Car car = new ElectricCar();\nSystem.out.print(car.drive());\n}\n}",

    Op0:"Driving vehicle", 
    Op1:"Driving electric car",
    Op2:"Driving car",
    Op3:"The code does not compile.",
    Correcta:"2"
},

{   
    Pregunta:"Which of the following statements about inheritance is correct?",
    Op0:"Java does not support multiple inheritance.",
    Op1:"Java allows multiple inheritance using abstract classes.",
    Op2:"Java allows multiple inheritance using non-abstract classes.",
    Op3:"Java allows multiple inheritance using interfaces.",
    Correcta:"0"
},

{   
    Pregunta:"How many changes need to be made to the classes below to properly override the watch()method?\npackage entertainment;\nclass Television { \nprotected final void watch() {} \n} \npublic class LCD extends Television { \nObject watch() {}\n}",
    Op0:"One",
    Op1:"Two",
    Op2:"Three",
    Op3:"None the code compiles as is.",
    Correcta:"0"
},

{   
    Pregunta:"Which of the following statements about overriding a method is incorrect?",
    Op0:"The return types must be covariant.",
    Op1:"The access modifier of the method in the child class must be the same or broader than the method in the superclass.",
    Op2:"A checked exception thrown by the method in the parent class must be thrown by the method in the child class.",
    Op3:"A checked exception thrown by a method in the child class must be the same or  narrower than the exception thrown by the method in the parent class.",
    Correcta:"3"
},


{   
    Pregunta:"What is the output of the following application?\npackage machines;\nclass Computer { \nprotected final int process() { return 5; }\n}\npublic class Laptop extends Computer {\npublic final int process() { return 3; }\npublic static void main(String[] chips) { \nSystem.out.print(new Laptop().process());   \n}\n}",
    Op0:"5",
    Op1:"3",
    Op2:"The code does not compile.",
    Op3:"The code compiles but throws an exception at runtime.",
    Correcta:"3"
},
{

    Pregunta:"Given that FileNotFoundException is a subclass of IOException, what is the output of The following application? \n Package edu; \n Import java.io.*; \n Class School { \n Public int getNumberOfStudentsPerClassroom(String… students)  \n Throws IOException { \n Return 3; } \n Public int getNumberOfStudentsPerClassroom() throws IOException { \n Return 9; } \n } \n Public class HighSchool extends School { \n Public int getNumberOfStudentsPerClassroom() throws FileNotFoundException { \n Return 2; } \n Public static void main(String[] students) throws IOException { \n School school = new HighSchool(); \n System.out.print(school.getNumberOfStudentsPerClassroom()); } \n }",
    Op0:"A. 2",
    Op1:"B. 3",
    Op2:"C. 9",
    Op3:"D. The code does not compile.",
    Correcta:"0"
},
{

    Pregunta:"Which modifier can be applied to an interface method?",
    Op0:"A. protected",
    Op1:"B. static",
    Op2:"C. private",
    Op3:"D. final",
    Correcta:"1"
},
{

    Pregunta:"What is the output of the following application?”, \n Package track; \n Interface Run { \n Default void walk() { \n System.out.print(“Walking and running!”); } \n } \n Interface Jog { \n Default void walk() { \n System.out.print(“Walking and jogging!”); } \n } \n Public class Sprint implements Run, Jog { \n Public void walk() { \n System.out.print(“Sprinting!”); } \n Public static void main() { \n New Sprint().walk(); } \n }",
    Op0:"A. Walking and running!",
    Op1:"B. Walking and jogging!",
    Op2:"C. Sprinting!",
    Op3:"D. The code does not compile.",
    Correcta:"3"
},
{
    Pregunta:"Which of the following statements about interfaces is not true?",
    Op0:"A. An interface can extend another interface.",
    Op1:"B. An interface can implement another interface.",
    Op2:"C. A class can implement two interfaces.",
    Op3:"D. A class can extend another class.",
    Correcta:"1"
},
{
    Pregunta:"What is the output of the following application?”, \n Package transport; \n Class Ship { \n Protected int weight = 3; \n Private int height = 5; \n Public int getWeight() { return weight; } \n Public int getHeight() { return height; } \n } \n Public class Rocket extends Ship { \n Public int weight = 2; \n Public int height = 4; \n Public void printDetails() { \n System.out.print(super.getWeight()+”,”+super.height); } \n Public static final void main(String[] fuel) { \n New Rocket().printDetails(); } \n }",
    Op0:"A. 2,5",
    Op1:"B. 3,4",
    Op2:"C. 3,5",
    Op3:"D. The code does not compile.",
    Correcta:"2"
},
{
    Pregunta:"Fill in the blanks: Excluding default and static methods, a(n) can contain both abstract and concrete methods, while a(n) Contains only abstract methods.",
    Op0:"A. concrete class, abstract class",
    Op1:"B. concrete class, interface",
    Op2:"C. interface, abstract class",
    Op3:"D. abstract class, interface",
    Correcta:"0"
},
{
    Pregunta:"Which statement about the following class is correct?”, \n Package shapes;  \n Abstract class Triangle { \n Abstract String getDescription(); } \n Class RightTriangle extends Triangle { \n Protected String getDescription() { return “rt”; } g1 } \n Public abstract class IsoscelesRightTriangle extends RightTriangle { g2 \n Public String getDescription() { return “irt”; } \n Public static void main(String[] edges) { \n Final Triangle shape = new IsoscelesRightTriangle(); g3 \n System.out.print(shape.getDescription()); } \n }",
    Op0:"A. The code does not compile due to line g1.",
    Op1:"B. The code does not compile due to line g2",
    Op2:"C. The code does not compile due to line g3.",
    Op3:"D. The code compiles and runs without issue.",
    Correcta:"3"
},
{

    Pregunta:"Given that Short and Integer extend Number, what type can be used to fill in the blank in the class below to allow it to compile?”, \n Package band; \n Interface Horn { public Integer play(); }.\n Abstract class Woodwind { public Short play() {return 3;} } \n Public final class Saxophone extends Woodwind implements Horn { \n Public play() {.\n Return null; }\n }",
    Op0:"A. Integer",
    Op1:"B. Short",
    Op2:"C. Number",
    Op3:"D. None of the above",
    Correcta:"0"
},
{
    Pregunta:"Fill in the blanks: A class an interface, while a class  An abstract class.",
    Op0:"A. extends, implements",
    Op1:"B. extends, extends",
    Op2:"C. implements, extend",
    Op3:"D. implements, implements",
    Correcta:"0"
},
{
    Pregunta:"What is the output of the following application?”, \n Package paper; \n Abstract class Book { \n Protected static String material = “papyrus”; \n Public Book() {} \n Public Book(String material) {this.material = material;} \n } \n Public class Encyclopedia extends Book { \n Public static String material = “cellulose”; \n Public Encyclopedia() {super();} \n Public String getMaterial() {return super.material;} \n Public static void main(String[] pages) { \n System.out.print(new Encyclopedia().getMaterial()); } \n }",
    Op0:"A. papyrus",
    Op1:"B. cellulose",
    Op2:"C. The code does not compile.",
    Op3:"D. The code compiles but throws an exception at runtime.",
    Correcta:"1"
},
{
    Pregunta:"The following diagram shows two reference variables pointing to the same Bunny object in memory. The reference variable myBunny is of type Bunny, while unknownBunny is Of an unknown data type. Which statement about the reference variables is not true?, For this question, assume the instance methods and variables shown in the diagram are marked public.",
    Op0:"A. If the unknownBunny reference does not have access to the same variables and methods That myBunny has access to, it can be explicitly cast to a reference type that does.",
    Op1:"B. The data type of unknownBunny must be Bunny or a subclass of Bunny.",
    Op2:"C. If the data type of unknownBunny is Bunny, it has access to all of the same methods and Variables as myBunny.",
    Op3:"D. The data type of unknownBunny could be an interface, class, or abstract class.",
    Correcta:"2"
},

{

pregunta:"Which of the following modifiers can be applied to an abstract method?",
op0:"final",
op1:"private",
op2:"default",
op3:"protected",
correcta:"3"
},

{

pregunta:"What is the output of the following application?\n package space;\n interface Sphere {\n default String getName() { return Unknown; }\n }\n abstract class Planet {\n   abstract   String getName();\n }\n public class Mars extends Sphere implements Planet {\n public Mars() {\n    super();\n    }\n    public String getName() { return Mars; }\n    public   static void main(final String[] probe) {\n    System.out.print(((Planet)new Mars()).getName());\n  }\n }", 
op0:"Mars",
op1:"Unknown",
op2:"The code does not compile due to the declaration of Sphere",
op3:"he code does not compile for another reason",
correcta:"0"
},

{

pregunta:"Which of the following statements is correct?",
op0:"A reference to a class can be assigned to a subclass reference without an explicit cast",
op1:"A reference to a class can be assigned to a superclass reference without an explicit cast",
op2:"A reference to an interface can be assigned to a reference of a class that implements the interface without an explicit cast",
op3:"A refrence to a class that implements an interface can be assigned to an interface  reference only with an explicit cast",
correcta:"1"
},

{

pregunta:"Of the following four modifiers, choose the one that is not implicitly applied to all interface variables",
op0:"final",
op1:"abstract",
op2:"static",
op3:"public",
correcta:"2"
},

{

pregunta:"What is the output of the following application?\n package race;\n abstract class Car {\n static { System.out.print(1); }\n   public Car(String name) {\n  super();  \n   System.out.print(2);\n }\n  { System.out.print3); }\n  }\n  public class BlueCar extends Car {\n   { System.out.print(4); }\n  public BlueCar() {\n    super(blue);\n        System.out.print(5); \n }\n public static void main(String[] gears) { \n   new BlueCar();\n  }\n }",
op0:"23451",
op1:"12354",
op2:"13245",
op3:"The code does not compile",
correcta:"1"
},

{

pregunta:"Fill in the blank: Overloaded and overridden methods always have___________________________",
op0:"the same parameter list",
op1:"different return types",
op2:"the same method name",
op3:"covariant return types",
correcta:"2"
},

{

pregunta:"What is the output of the following application?\n  package sports;\n abstract class Ball {\n  protected final int size;\n  public Ball(int size) {\n this.size = size;\n }\n}  \n interface Equipment {}\n public class SoccerBall extends Ball implements Equipment {\n  public SoccerBall() {\n super(5);\n }\n public Ball get() { return this; }\n public static   void main(String[] passes) {\n Equipment equipment = (Equipment)(Ball)new SoccerBall().get();\n  System.out.print(((SoccerBall)equipment).size);\n }\n}",
op0:"5",
op1:"The code does not compile due an invalid cast",
op2:"The code does not compile for a different reason",
op3:"The code compiles but throws a ClassCastException at runtime.",
correcta:"0"
},

{

pregunta:"Fill in the blanks: A class that defines an instance variable with the same name as a variable in the parent class is referred to as_______________________a variable,\n    while   a class that defines a static method with the same signature as a static method in a parent class is referred to as______________________  a method",
op0:"hiding, overriding",
op1:"overriding, hiding",
op2:"hiding, hiding",
op3:"eplacing, overriding",
correcta:"0"
},

{ 

pregunta:" Which statement about the following class is correct?\n package shapes;\n abstract class Parallelogram {\n  private int getEqualSides() {return 0;}\n }\n abstract   class   Rectangle extends Parallelogram {\n public static int getEqualSides() {return 2;} // x1\n }\n public final class Square extends Rectangle {\n public int getEqualSides()   {return 4;} // x2 \n  public static void main(String[] corners) {\n final Square myFigure = new Square(); // x3\n System.out.print(myFigure.getEqualSides());\n }\n }",
op0:"The code does not compile due to line x1",
op1:"The code does not compile due to line x2",
op2:"The code does not compile due to line x3",
op3:"The code compiles and runs without issue",
correcta:"0" 
},

{

pregunta:"What is the output of the following application?\n  package flying;\n class Rotorcraft {\n protected final int height = 5;\n abstract int fly();\n }\n public class   Helicopter extends Rotorcraft {\n     private int height = 10;\n   protected int fly() {\n     return super.height;\n  }\n public static void main(String[] unused) {\n Helicopter   h =   (Helicopter)new Rotorcraft();\n  System.out.print(h.fly());\n  }\n }",
op0:"5",
op1:"10",
op2:"The code does not compile",
op3:"The code compiles but produces a ClassCastException at runtime",
correcta:"2"
},

{

pregunta:" Fill in the blanks: A class may be assigned to a(n)______________________________  reference variable automatically but requires an explicit cast when assigned\n  to a(n)______________________reference variable",
op0:"subclass, outer class",
op1:"superclass, subclass",
op2:"subclass, superclass",
op3:"abstract class, concrete class",
correcta:"2"
},

{
pregunta:" Fill in the blank: A(n)__________is the first non-abstract subclass that is\n required to implement all of the inherited abstract methods.",
op0:"A. abstract class",
op1:"B. abstraction ",
op2:"C. concrete class",
op3:"D. interface",
correcta:"2"
},
{
pregunta:"How many compiler errors does the following code contain? \n package animal;\n interface CanFly {\n public void fly() {}\n    \n final class Bird { \n public int fly(int speed) {} \n    } \n public \n class Eagle extends Bird implements CanFly { \n  public void fly() \n } ",
op0:"A. None ",
op1:"B. One",
op2:"C. Two",
op3:"D. Three",
correcta:"3"
},
{
pregunta:" Which of the following is not an attribute common to both abstract classes and interfaces?",
op0:"A. They both can contain static variables.",
op1:"B. They both can contain default methods.",
op2:"C. They both can contain static methods.",
op3:"D. They both can contain abstract methods.",
correcta:"1"
},
{
pregunta:"What is the output of the following application? \n  package musical;  \n interface SpeakDialogue { default int talk() { return 7; } } \n interface SingMonologue { default int talk() { return 5; } }\n public class Performance implements SpeakDialogue, SingMonologue { \n public int talk(String ... x) {  \n return x. length;  \n    } \n   public static void main(String[] notes) { \n  System.out.print(new Performance().talk(notes)); \n }  \n  }",
op0:"A. 7",
op1:"B. 5",
op2:"C. The code does not compile.",
op3:"D. The code compiles without issue, but the output cannot be determined until runtime. ",
correcta:"2"
},
{
pregunta:"Which of the following is a virtual method?",
op0:"A. protected instance methods",
op1:"B. static methods",
op2:"C. private instance methods",
op3:"D. final instance methods",
correcta:"0"
},
{
 pregunta:"Fill in the blanks: An interface ____________another interface, while a class  \n another class.",
 op0:"A. implements, extends",
 op1:"B. extends, extends ",
 op2:"C. implements, implements",
 op3:"D. extends, implements",
 correcta:"1"
},
{
 pregunta:"What is the output of the following application? \n class Math { \n public final double secret = 2;\n}\nclass ComplexMath extends Math { \n   public final double secret = 4; \n}B \n public class InfiniteMath extends ComplexMath { \n public final double secret = 8; \n   public static void main(String[] numbers) { \n    Math math = new InfiniteMath(); \n    System.out.print(math.secret); \n } \n }",
 op0:"A. 2",
 op1:"B. 4",
 op2:"C. 8",
 op3:"D. The code does not compile",
 correcta:"0"
},
{
pregunta:"Given the following method and the fact that FileNotFoundException is a subclass of \n IOException, which of the following method signatures is a valid override by a subclass? \n protected void dance() throws FileNotFoundException {}",
op0:"A. void dance() throws IOException",
op1:"B. public void dance() throws IOException",
op2:"C. private void dance() throws FileNotFoundException",
op3:"D. public final void dance()",
correcta:"3"
},
{
pregunta:"Given the class definitions below, which value, when inserted into the blank line, does not \n allow the class to compile?\n public class Canine {} \n public class Dog extends Canine {} \n public class Wolf extends Canine {} \n public final class Husky extends Dog {} \n public class Zoologist { \n Canine animal; \n public final void setAnimal(Dog animal) { this.animal = animal; } \n public static void main(String[] furryFriends) { \n new Zoologist().setAnimal(. \n }\n}",
op0:"A. new Husky()",
op1:"B. new Dog()",
op2:"C. new Wolf()",
op3:"D. null",
correcta:"2"
},
{
pregunta:"Which of the following modifiers cannot be applied to an interface method?",
op0:"A. final",
op1:"B. default",
op2:"C. static",
op3:"D. abstract",
correcta:"0"
},
{
pregunta:". Which statement about the following application is true? \npackage party; \nabstract class House { \n   protected abstract Object getSpace(); \n} \nabstract class Room extends House { \n   abstract Object getSpace(Object list); \n} \nabstract public class Ballroom extends House { \n  protected abstract Object getSpace(); \n   public static void main(String[] squareFootage) {  \n      System.out.print(Let's start the party!); \n   } \n}",
op0:"A. It compiles and at runtime prints Let's start the party!",
op1:"B. It does not compile for one reason.",
op2:"C. It does not compile for two reasons.",
op3:"D. It does not compile for three reasons.",
correcta:"0"
},
{
pregunta:"Fill in the blanks:___________methods must have a different list of param-\n eters, while________________methods must have the exact same return type.",
op0:"A. Overloaded, overridden",
op1:"B. Inherited, overridden",
op2:"C. Overridden, overloaded",
op3:"C. Overridden, overloaded",
correcta:"3"
},


{
pregunta:"Which of the following statements about no-argument constructors is correct?",
op0:"If a parent class does not include a no-argument constructor, a child class cannot declare one.",
op1:"If a parent class does not include a no-argument constructor (nor a default one inserted by the compiler), a child class must contain at least one constructor definition.",
op2:"If a parent class contains a no-argument constructor, a child class must contain a no-argument constructor.",
op3:"If a parent class contains a no-argument constructor, a child class must contain at least one constructor.",
correcta:"1"
    },
{
pregunta:"Fill in the blanks: The _______________ determines which attributes exist in memory, while the _____________ determines which attributes are accessible by the caller.",
op0:"reference type, signature",
op1:"object type, superclass",
op2:"reference type, object type",
op3:"object type, reference type",
correcta:"3"
    },
{
pregunta:"Given that Integer and Long are subclasses of Number, what type can be used to fill in the blank in the class below to allow it to compile? \n    package orchestra;\n    interface MusicCreator { public Number play(); }\n    abstract class StringInstrument { public Long play() {return 3L;} }\n     public class Violin extends StringInstrument implements MusicCreator {\n       public __________ play() { \n          return 12;\n       }\n    }",

op0:"Long",
op1:"Integer",
op2:"Long or Integer",
op3:"Long or Number",
correcta:"0"
    },
{
pregunta:"Which of the following is the best reason for creating a default interface method?",
op0:"Allow interface methods to be inherited.",
op1:"Add backward compatibility to existing interfaces.",
op2:"Give an interface the ability to create concrete methods.",
op3:"Allow an interface to define a method at the class level.",
correcta:"1"
    },
{
pregunta:"Given that EOFException is a subclass of IOException, what is the output of the following application?\n    package ai;\n     import java.io.*;\n     class Machine {\n       public boolean turnOn() throws EOFException {return true;}\n    }\n    public class Robot extends Machine {\n       public boolean turnOn() throws IOException {return false;}\n       public static void main(String[] doesNotCompute) throws Exception {\n           Machine m = new Robot();\n          System.out.print(m.turnOn());\n        }\n    }",
op0:"true",
op1:"false",
op2:"The code does not compile.",
op3:"The code compiles but produces an exception at runtime.",
correcta:"2"
    },



{
pregunta:"What is the result of compiling and executing the following application?\n    package mind;\n    public class Remember {\n       public static void think() throws Exception { // k1\n           try {\n            throw new Exception();\n          }\n       }\n       public static void main(String... ideas) throws Exception { }\n         think();\n      }\n    }",

op0:"The code compiles and runs without printing anything.",
op1:"The code compiles but a stack trace is printed at runtime.",
op2:"The code does not compile because of line k1.",
op3:"The code does not compile for another reason.",
correcta:"3"
    },
{
pregunta:"Choose the answer that lists the keywords in the order that they would be used together.",
op0:"catch, try, finally",
op1:"try, catch, finally",
op2:"finally, catch, try",
op3:"try, finally, catch",
correcta:"1"
    },
{
pregunta:"Which of the following diagrams of java.lang classes shows the inheritance model properly?",
op0:"A. ",
op1:"B. ",
op2:"C. ",
op3:"D. ",
correcta:"3"
    },
{
pregunta:"Which of the following Throwable types is it recommended not to catch in a Java application?",
op0:"Error",
op1:"CheckedException",
op2:"Exception",
op3:"RuntimeException",
correcta:"0"
    },
{
pregunta:"What is the output of the following application?\n    package game;\n    public class Baseball {\n       public static void main(String... teams) { \n          try {\n              int score = 1;\n              System.out.print(score++);\n          } catch (Throwable t) {\n               System.out.print(score++);\n          } finally {\n               System.out.print(score++);\n        }\n              System.out.print(score++);\n      }\n    }",
op0:"123",
op1:"124",
op2:"12",
op3:"None of the above",
correcta:"3"
    },
{
pregunta:"Which of the following is a checked exception?",
op0:"ClassCastException",
op1:"IOException",
op2:"ArrayIndexOutOfBoundsException",
op3:"IllegalArgumentException",
correcta:"1"
    },
{
pregunta:"Fill in the blanks: The __________ keyword is used in method declarations, while the __________ keyword is used to throw an exception to the surrounding process.",
op0:"throws, throw",
op1:"catch, throw",
op2:"throw, throws",
op3:"throws, catch",
correcta:"0"
    },


        {
    pregunta:"which import statement is required to be declared in order to use the Exception, RutimeException, and Throwable\n classes in an application?",
    op0:"a) Import java.exception.*; ",
    op1:"b) Import java.util.exception.*;",
    op2:"c) Import java.lang.*;",
    op3:"d) None of the above",
    correcta:"0"
},
        {
    pregunta:"Which statement about the following classes is correct? \n\n class GasException extends Exception {} \n class Element { \n public int getSymbol() { return 8; } // g2 \n public void printData () { \n try { \n System.out.print´('Unable to read data'); \n   } \n  } \n   }",
    op0:"A) The code does not compile because of line g1. ",
    op1:"B) The code does not compile because of line g2. ",
    op2:"C) The code does not compile because of line g3.",
    op3:"D) None of the above",
    correcta:"0"
},
   {
    pregunta:" Fill in the blanks: A program must handle or declare_____________ but should never handle__________",
    op0:"A) Java.lang.Error, unchecked exceptions",
    op1:"B) checked exceptions, java.lang.Error",
    op2:"C) java.lang.Throwable, java.langException",
    op3:"D) unchecked exceptions, java.lang.Exception",
    correcta:"2"
},
        {
    pregunta:"What is the result of compiling and running the following apllication \n\n package castles; \class castUnderSiegeException extends Exception {} \n class knightAttackingException extends CastelsUnderSiegeException{} \n public class Citadel { \n   public void openDrawbridge() trows RuntimeException { //q1  \n try { \n   throw new knightAttackinException(); \n } catch (Exception e) { \n  throw new ClassCastExcetion(); \n } finally { \n throw new CastleUnderSiegeException(); //q2 \n } \n  }  \n public static void main(String[] moat) {  \n new Citadel().oprnDrawbridge();  //q3  \n    }\n  } ",
    op0:"A) The code not compile because of line q1",
    op1:"B) The code not compile because of line q2",
    op2:"C) The code not compile because of line q3",
    op3:"The code compiles, but a stack trace is printed at runtime.",
    correcta:"3"
},
    {
    pregunta:"If an exception matches two or more catch blocks, which catch block is executed?",
    op0:"A) The first one that matches is executed.",
    op1:"B) The last one that matches is executed.",
    op2:"C) All matched blocks are executed",
    op3:"It is not possible to write code like this",
    correcta:"1"
},
    {
    pregunta:"What is the output of the following application? \n\n package system; \n public class Computer   {\n    public void compute()  throws Exception  { \n   throw  new RuntimeException('Error processing request'); \n }\n public static void main(String[] bits) { \n try { \n new Computer().compute();\n System.out.print('ping');\n } catch (nullPointerException e) { \n System.out.print('pong'); \n thow e;\n     }\   }\  }",
    op0:"A) Ping",
    op1:"B) pong",
    op2:"C) The code does not compile",
    op3:"D) The code compiles bot throws an exception at runtime",
    correcta:"3"
},
    {
    pregunta:"In the following application, the value of list has been omitted. Assuming the code \n compiles without issue, which one of the following is not a possible outpot of executing \n this class? \n\n package checkboard; \n\n public class Attendance { \n private Boolean [] list= // value omitted \n public int printTodaysCount () { \n int coun=0;  \n for (int i=0; i<10; i++) { \n if (list[i]) ++count; \n }\n return count; \n return count; \n } public static void main(String[] roster) { \n new Attendance().printTodaysCount(); \n    }\n   }",
    op0:"A) Astack trace for NullPointerException is printed",
    op1:"B) A stack trace for ArrayIndex0ut0fBoundsException is printed",
    op2:"c) A stack trace for ClassCastException is printed",
    op3:"D) None of the above",
    correcta:"2"
},
   {
    pregunta:"Fill in the blanks: A______occurs when a program recurses too deeply into an infinite loop, while a(n)_________occurs \n when a reference to a nonexistent object is acted upon",
    op0:"A) NoClassDefFoundError, StackOverflowError) ",
    op1:"B) StackOverflowError, NullPointerException",
    op2:"C) ClassCastException,IllegalArgumentException",
    op3:"D) stackOverflowError, IllegalArgumentException",
    correcta:"3"
},
    {
    pregunta:"Which of the following is not a reason to add checked exceptions to a method signature?",
    op0:"A) To forse a caller to handle or declare its exceptions",
    op1:"B) To notify the caller of potential types of problems ",
    op2:"C) To ensure that exceptions never cause the application to terminate ",
    op3:"D) To give the caller a chance to recover from a problem ",
    correcta:"0"
},
   {
    pregunta:"What is the ouput of the following application? \n package peculiar; \n public class Stranger { \n public static String getfullName (String firstName, String lastName) { \n try { \n   return first name.toString() +    + lastName.toString(); \n } finally {\n  System.out.print('Finished!'); \n } catch (NullPointerException npe) { \n System.out.print ('problem?'); \n } \n  return null; \n }\n public static void main(String[] things ) {\n  System.out.print(getFullName('Joyce', 'Hopper')); \n    } \n  \n",
    op0:"A) Joyce Hopper",
    op1:"B) Finished! Joyce Hopper",
    op2:"C) Problem? Finished!null",
    op3:"D) None of the above",
    correcta:"1"
},
   {
    pregunta:"Fill in the blaks: A try statement has_______________finally block(s) and____________catch blocks",
    op0:"A) zeroor one, zero or more",
    op1:"B) one, one or more",
    op2:"C) zero or one, zero or one ",
    op3:"D) one more, zero or one",
    correcta:"1"
},
   {
    pregunta:"What is the outpot of the following application? \n\n package pond; \n abstract class Duck { \n   protected int count;\n    public abstract int getDuckies(); \n } \n   public class Ducklings extends Duck  {\n   private int age;\n  public Ducklings(int age)  { this.age = age} \n  public int getDuckies() { return this.age/count; } \n  public static void main(String[] pondInfo) { \n  Duck itQuacks = new Ducklings(5); \n  System.out.print(itQuacks.getDuckies()); \n   } \n  }",
    op0:"A) 0",
    op1:"B) 5",
    op2:"C) The code does not compile",
    op3:"D) The code compiles but throws an exception at runtime",
    correcta:"2"
},
{
    pregunta:"What is the output of the following application?package pond;abstract class Duck {   protected int count;   public abstract int getDuckies();}public class Ducklings extends Duck {   private int age;   public Ducklings(int age) { this.age = age; }   public int getDuckies() { return this.age/count; }   public static void main(String[] pondInfo) {uck itQuacks = new Ducklings(5);      System.out.print(itQuacks.getDuckies());   }}",
    op0:"0",
    op1:"5",
    op2:".The code does not compile.",
    op3:"The code compiles but throws an exception at runtime",
    correcta: "0"
},

{
    pregunta:"Given a try statement, if both the catch block and the finally block each throw an exception, what does the caller see?",
    op0:"The exception from the catch block",
    op1:"The exception from the finally block",
    op2:"Both the exception from the catch block and the exception from the finally block",
    op3:"None of the above",
    correcta:"0"
},

{
    pregunta:"What is the output of the following application?package zoo;class BigCat {   void roar(int level) throw RuntimeException {  // m1      if(level<3) throw new IllegalArgumentException(\"Incomplete\");      System.out.print(\"Roar!\");   }}public class Lion extends BigCat {   public void roar() {  // m2      System.out.print(\"Roar!!!\");   }   public static void main(String[] cubs) {      final BigCat kitty = new Lion();  // m3      kitty.roar(2);   }}",
    op0:"The code does not compile because of line m1",
    op1:"The code does not compile because of line m2.",
    op2:"The code does not compile because of line m3.",
    op3:"The code compiles but a stack trace is printed at runtime.",
    correcta:"0"
},

{
    pregunta:"Given the following code snippet, which specific exception will be thrown?final Object exception = new Exception();final Exception data = (RuntimeException)exception;System.out.print(data);",
    op0:"ClassCastException",
    op1:"RuntimeException",
    op2:"NullPointerException",
    op3:"None of the above",
    correcta:"1"
},


{
    pregunta:"Which of the following classes will handle all types in a catch block?",
    op0:"Exception",
    op1:"Error",
    op2:"Throwable",
    op3:"RuntimeException",
    correcta:"2"
},


{
    pregunta:"In the following application, the values of street and city have been omitted. Which one of the following is a possible output of executing this class?I.350 5th Ave - New YorkII.Posted:350 5th Ave - New Yorkpackage registration;public class Address {   public String getAddress(String street, String city) {      try {         return street.toString() + \" : \" + city.toString();      } finally {         System.out.print(\"Posted:\");      }   }   public static void main(String[] form) {      String street = // value omitted      String city = // value omitted      System.out.print(new Address().getAddress(street,city));   }}",
    op0:"I only",
    op1:"II only",
    op2:"I and II",
    op3:"None of the above",
    correcta:"0"
},


{
    pregunta:"If a try statement has catch blocks for both ClassCastException and RuntimeException, then which of the following statements is correct?",
    op0:"The    catch block for ClassCastException must appear before the catch block for RuntimeException.",
    op1:"The    catch block for RuntimeException must appear before the catch block for ClassCastException.",
    op2:"The    catch blocks for these two exception types can be declared in any order.",
    op3:"A    try statement cannot be declared with these two catch block types because they are incompatible.",
    correcta:"3"
},


{
    pregunta:"Which of the following is the best scenario to use an exception?",
    op0:"The computer caught fire.",
    op1:"The code does not compile",
    op2:"A caller passes invalid data to a method.",
    op3:"A method finishes sooner than expected.",
    correcta:"3."
},


{
    pregunta:"What is the output of the following application?package body;class Organ {   public void operate() throws RuntimeException {      throw new RuntimeException(\"Not supported\");   }}public class Heart extends Organ {   public void operate() throws Exception {      System.out.print(\"beat\");   }   public static void main(String... cholesterol) throws Exception {      try {         new Heart().operate();      } finally {      }   }}",
    op0:"beat",
    op1:"Not supported",
    op2:"The code does not compile.",
    op3:"The code compiles but a stack trace is printed at runtime.",
    correcta:"2"
},

{
    pregunta:"Which statement about the following exception statement is correct?throw new NullPointerException();",
    op0:"The code where this is called must include a try-catch block that handles this exception.",
    op1:"The method where this is called must declare a compatible exception.",
    op2:"This exception cannot be handled.",
    op3:"This exception can be handled with a try-catch block or ignored altogether by the surrounding method.",
    correcta:"1."
},

{
    pregunta:"What is the output of the following application?package clothing;public class Coat {   public Long zipper() throws Exception {      try {         String checkZipper = (String)new Object();      } catch (Exception e) {         throw RuntimeException(\"Broken!\");      }      return null;   }   public static void main(String... warmth) {      try {         new Coat().zipper();         System.out.print(\"Finished!\");      } catch (Throwable t) {}   }}",
    op0:"Finished!",
    op1:"Finished!, followed by a stack trace",
    op2:"The application does not produce any output at runtime.",
    op3:"The code does not compile.",
    correcta:"2"
},


{
    pregunta:"Given the following application, which type of exception will be printed in the stack trace at runtime?package carnival;public class WhackAnException {   public static void main(String... hammer) {      try {         throw new ClassCastException();} catch (IllegalArgumentException e) {         throw new IllegalArgumentException();      } catch (RuntimeException e) {         throw new NullPointerException();      } finally {         throw new RuntimeException();      }   }}",
    op0:"IllegalArgumentException",
    op1:"NullPointerException",
    op2:"RuntimeException",
    op3:"0",
    correcta:"1"
},
{

pregunta:" Which of these method signatures is allowed in a class implementing the Outfielder interface? class OutOfBoundsException extends BadCatchException {} class BadCatchException extends Exception {} public interface Outfielder { public void catchBall() throws OutOfBoundsException;",
        op0:"public int catchBall() throws OutOfBoundsException ",
        op1:"public int catchBall() throws BadCatchException ",
        op2:"public int catchBall() throws Exception ",
        op3:"None of the above",
        correcta:"1" 
    },

{
        pregunta:" What is the output of the following application? package city; public class Street {public static void dancing() throws RuntimeException {tryf throw new IllegalArgumentException(); } catch (Error) { System.out.print(Unable!); public static void main(String... count) throws RuntimeException { dancing();}",
        op0:" Unable!",
        op1:"The application does not produce any output.",
        op2:"The application compiles but produces a stack trace at runtime",
        op3:"The code does not compile. ",
        correcta:"0"
    },

{
        pregunta:" What is the result of compiling and running the following application? package castles;,} public static void main (String[] moat) throws Exception { new Lair ().openDrawbridge(); 1/ r3",
        op0:"The code does not compile because of line r 1",
        op1:"The code does not compile because of line r2.",
        op2:"The code does not compile because of line r3.",
        op3:"The code compiles, but a stack trace is printed at runtime.",
        correcta:"0"
    },

{
        pregunta:" If a try statement has catch blocks for both IllegalArgumentException and ClassCastException, then which of the following statements is correct?",
        op0:"The catch block for IllegalArgumentException must appear before the catch block for ClassCastException.",
        op1:"The catch block for ClassCastException must appear before the catch block for IllegalArgumentException",
        op2:"The catch blocks for these two exception types can be declared in any order",
        op3:"A try statement cannot be declared with these two catch block types because they are incompatible.",
        correcta:"2 "
    },

{
        pregunta:" What is the output of the following application? package broken;",
        op0:"Problem?Fixed!",
        op1:"Handled. Fixed!",
        op2:"Problem?Handled. Fixed!",
        op3:"The code does not compile",
        correcta:"3"
    },

{
        pregunta:"What is the output of the following application? package lighting;",
        op0:"A stack trace for a RuntimeException",
        op1:"Flipped!, followed by a stack trace for a RuntimeException",
        op2:"The code does not compile because flipSwitch() is an invalid method override.",
        op3:"The code does not compile for another reason.",
        correcta:"3"
    },

{
        pregunta:"Given an application that hosts a website, which of the following would most likely result in a java. lang. Error being thrown?",
        op0:"Two users try to register an account at the same time.",
        op1:"The application temporarily loses connection to the network",
        op2:"A user enters their password incorrectly.",
        op3:"The application runs out of memory.",
        correcta:"1"
    },

{
        pregunta:" Given that FileNotFoundException is a subclass of IOException, what is the output of the following application? package storage; import java.io",
        op0:"Failed",
        op1:"The application compiles but a stack trace is printed at runtime.",
        op2:"The code does not compile because of line z1.",
        op3:"The code does not compile because of line 22.",
        correcta:"0"
    },
    {
            
        pregunta:"24.The author of this method forgot to include the data type. Which of the following reference types can fill in the blank to complete this method?",

        op0:"A.	ArrayList",
        op1:"B.	String",
        op2:"C.	StringBuilder",
        op3:"D.	None of the above",
        correcta:"1"
    },

    {
            
        pregunta:"25.Which statement is true about the following figure while ensuring the code continues to compile?",
       
        op0:"A.	<> can be inserted at position P without making any other changes.",
        op1:"B.	<> can be inserted at position Q without making any other changes.",
        op2:"C.	<> can be inserted at both positions P and Q.",
        op3:"D.	None of the above",
        correcta:"3"
    },

    {
            
        pregunta:"26.Which of the following can fill in the blank to make the code compile?",
 
        op0:"A.	(Integer i)",
        op1:"B.	(Object o)",
        op2:"C.	(String s)",
        op3:"D.	None of the above",
        correcta:"3"
    },

       {
            
        pregunta:"27.What is the output of the following?",
        op0:"A.	false 1",
        op1:"B.	false 2",
        op2:"C.	true 1",
        op3:"D.	true 2",
        correcta:"0"
    },

{
            
        pregunta:"28.What does the following output?",
        op0:"A.	true",
        op1:"B.	false",
        op2:"C.	The code does not compile.",
        op3:"D.	The code compiles but throws an exception at runtime.",
        correcta:"2"
    },

{
            
        pregunta:"29.Of the classes LocalDate, LocalDateTime, LocalTime, and LocalTimeStamp, how many include hours, minutes, and seconds?",
        op0:"A.	One",
        op1:"B.	Two",
        op2:"C.	Three",
        op3:"D.	Four",
        correcta:"1"
    },

{
            
        pregunta:"30.	What is the output of the following class?",
        op0:"A.	2",
        op1:"B.	3",
        op2:"C.	4",
        op3:"D.	None of the above",
        correcta:"3"
    },

{
            
        pregunta:"31.Which equivalent code can replace i -> i != 0 in the following line?",
        op0:"A. i -> { i != 0 }",
        op1:"B. i -> { i != 0; }",
        op2:"C.	i -> { return i != 0 }",
        op3:"D.	i -> { return i != 0; }",
        correcta:"3"
    },

{
            
        pregunta:"32.What is the output of the following?",
        op0:"A.	24",
        op1:"B.	25",
        op2:"C.	26",
        op3:"D.	None of the above",
        correcta:"1"
    },

{
            
        pregunta:"33.What is the output of the following?",
        op0:"A.	e",
        op1:"B.	d",
        op2:"C.	ed",
        op3:"D.	None of the above",
        correcta:"0"
    },

{
            
        pregunta:"34.What does the following output?",
        op0:"A.	true",
        op1:"B.	false",
        op2:"C.	The code does not compile.",
        op3:"D.	The code compiles but throws an exception at runtime.",
        correcta:"1"
    },

{
            
        pregunta:"35.Which starts counting from one rather than zero?",
        op0:"A.	Array indexes",
        op1:"B.	The index used by charAt in a String",
        op2:"C.	The months in a LocalDateTime",
        op3:"D.	The months in a LocalTime",
        correcta:"2"
    },

{
            
        pregunta:"36.Which statement is not true of Predicate?",
        op0:"A.	A boolean is returned from the method it declares.",
        op1:"B.	It is an interface.",
        op2:"C.	The method it declares accepts two parameters.",
        op3:"D.	The method it declares is named test.",
        correcta:"2"
    },

{
            
        pregunta:"37.Which of these periods represents a larger amount of time?",
        op0:"A.	period1",
        op1:"B.	period2",
        op2:"C.	They represent the same length of time.",
        op3:"D.	None of the above. This code does not compile.",
        correcta:"1"
    },

{
            
        pregunta:"38.	What is the result of the following?",
        op0:" 01-01-2017",
        op1:"12-31-2016",
        op2:"C.	The code does not compile.",
        op3:"D.	The code compiles but throws an exception at runtime.",
        correcta:"1"
    },

{
            
        pregunta:"39.Which of the following can fill in the blank so the following code prints true?",
        op0:"A.	happy.substring(0, happy.length() - 1)",
        op1:"B.	happy.substring(0, happy.length())",
        op2:"C.	happy.substring(1, happy.length() - 1)",
        op3:"D.	happy.substring(1, happy.length())",
        correcta:"2"
    },
{
pregunta:" Which of these method signatures is allowed in a class implementing the Outfielder interface?",
        op0:"public int catchBall() throws OutOfBoundsException ",
        op1:"public int catchBall() throws BadCatchException ",
        op2:"public int catchBall() throws Exception ",
        op3:"None of the above",
        correcta:"7 "
    },

{
        pregunta:" What is the output of the following application? package city;}",
        op0:" Unable!",
        op1:"The application does not produce any output.",
        op2:"The application compiles but produces a stack trace at runtime",
        op3:"The code does not compile. ",
        correcta:"1"
    },

{
        pregunta:" What is the result of compiling and running the following application? package castles;",

        op0:"The code does not compile because of line r 1",
        op1:"The code does not compile because of line r2.",
        op2:"The code does not compile because of line r3.",
        op3:"The code compiles, but a stack trace is printed at runtime.",
        correcta:"3"
    },

{
        pregunta:" If a try statement has catch blocks for both IllegalArgumentException and ClassCastException, then which of the following statements is correct?",
        op0:"The catch block for IllegalArgumentException must appear before the catch block for ClassCastException.",
        op1:"The catch block for ClassCastException must appear before the catch block for IllegalArgumentException",
        op2:"The catch blocks for these two exception types can be declared in any order",
        op3:"A try statement cannot be declared with these two catch block types because they are incompatible.",
        correcta:"0"
    },
    

{
        pregunta:" What is the output of the following application? package broken;",
        op0:"Problem?Fixed!",
        op1:"Handled. Fixed!",
        op2:"Problem?Handled. Fixed!",
        op3:"The code does not compile",
        correcta:"2"
    },

{
        pregunta:"What is the output of the following application? package lighting;}",
        op0:"A stack trace for a RuntimeException",
        op1:"Flipped!, followed by a stack trace for a RuntimeException",
        op2:"The code does not compile because flipSwitch() is an invalid method override.",
        op3:"The code does not compile for another reason.",
        correcta:"3"
    },

{
        pregunta:"Given an application that hosts a website, which of the following would most likely result in a java. lang. Error being thrown?",
        op0:"Two users try to register an account at the same time.",
        op1:"The application temporarily loses connection to the network",
        op2:"A user enters their password incorrectly.",
        op3:"The application runs out of memory.",
        correcta:"1"
    },

{
        pregunta:" Given that FileNotFoundException is a subclass of IOException, what is the output of the following application? package storage; import java.io.*;}",
        op0:"Failed",
        op1:"The application compiles but a stack trace is printed at runtime.",
        op2:"The code does not compile because of line z1.",
        op3:"The code does not compile because of line 22.",
        correcta:"2"
    },
    {
        pregunta:" What is the result of compiling and running the following application? package castles;",

        op0:"The code does not compile because of line r 1",
        op1:"The code does not compile because of line r2.",
        op2:"The code does not compile because of line r3.",
        op3:"The code compiles, but a stack trace is printed at runtime.",
        correcta:"0"
    },

{
        pregunta:" If a try statement has catch blocks for both IllegalArgumentException and ClassCastException, then which of the following statements is correct?",
        op0:"The catch block for IllegalArgumentException must appear before the catch block for ClassCastException.",
        op1:"The catch block for ClassCastException must appear before the catch block for IllegalArgumentException",
        op2:"The catch blocks for these two exception types can be declared in any order",
        op3:"A try statement cannot be declared with these two catch block types because they are incompatible.",
        correcta:"0 "
    },

{
        pregunta:" What is the output of the following application? package broken;",
        op0:"Problem?Fixed!",
        op1:"Handled. Fixed!",
        op2:"Problem?Handled. Fixed!",
        op3:"The code does not compile",
        correcta:"2"
    },

{
        pregunta:"What is the output of the following application? package lighting;}",
        op0:"A stack trace for a RuntimeException",
        op1:"Flipped!, followed by a stack trace for a RuntimeException",
        op2:"The code does not compile because flipSwitch() is an invalid method override.",
        op3:"The code does not compile for another reason.",
        correcta:"1"
    },

{
        pregunta:"Given an application that hosts a website, which of the following would most likely result in a java. lang. Error being thrown?",
        op0:"Two users try to register an account at the same time.",
        op1:"The application temporarily loses connection to the network",
        op2:"A user enters their password incorrectly.",
        op3:"The application runs out of memory.",
        correcta:"3."
    },

{
        pregunta:" Given that FileNotFoundException is a subclass of IOException, what is the output of the following application? package storage; import java.io.*;}",
        op0:"Failed",
        op1:"The application compiles but a stack trace is printed at runtime.",
        op2:"The code does not compile because of line z1.",
        op3:"The code does not compile because of line 22.",
        correcta:"2"
    },
    {
            
        pregunta:"The author of this method forgot to include the data type. Which of the following reference types can fill in the blank to complete this method?",
        /* public static void secret(	mystery) { mystery = mystery.replace("1", "8"); mystery.startsWith("paper");
        String s = mystery.toString();
        }
         */
        op0:"A.	ArrayList",
        op1:"B.	String",
        op2:"C.	StringBuilder",
        op3:"D.	None of the above",
        correcta:"1"
    },

    {
            
        pregunta:"Which statement is true about the following figure while ensuring the code continues to compile?",
        /*List balloons = new ArrayList ();*/

        op0:"A.	<> can be inserted at position P without making any other changes.",
        op1:"B.	<> can be inserted at position Q without making any other changes.",
        op2:"C.	<> can be inserted at both positions P and Q.",
        op3:"D.	None of the above",
        correcta:"3"
    },

    {
            
        pregunta:"Which of the following can fill in the blank to make the code compile?",
        /* import java.util.function.*; 
          public class Card {
          public static void main(String[] s) { Predicate<String> pred =	-> true;
        } 
        }  */
        op0:"A.	(Integer i)",
        op1:"B.	(Object o)",
        op2:"C.	(String s)",
        op3:"D.	None of the above",
        correcta:"3"
    },

       {
            
        pregunta:"What is the output of the following?",
        /*5: String line = new String("-");
          6: String anotherLine = line.concat("-"); 
          7: System.out.print(line == anotherLine);  
          8: System.out.print(" ");
          9: System.out.print(line.length());*/
        op0:"A.	false 1",
        op1:"B.	false 2",
        op2:"C.	true 1",
        op3:"D.	true 2",
        correcta:"0"
    },

{
            
        pregunta:"What does the following output?",
        /*Predicate dash = c -> c.startsWith("-"); 
        System.out.println(dash.test("–")); */
        op0:"A.	true",
        op1:"B.	false",
        op2:"C.	The code does not compile.",
        op3:"D.	The code compiles but throws an exception at runtime.",
        correcta:"2"
    },

{
            
        pregunta:"Of the classes LocalDate, LocalDateTime, LocalTime, and LocalTimeStamp, how many include hours, minutes, and seconds?",
        /* */
        op0:"A.	One",
        op1:"B.	Two",
        op2:"C.	Three",
        op3:"D.	Four",
        correcta:"1"
    },

{
            
        pregunta:"	What is the output of the following class?",
        /*1: package rocket;
          2: public class Countdown {
          3:	public static void main(String[] args) { 4:		String builder = "54321";
          5:	builder = builder.substring(4);
          6:	System.out.println(builder.charAt(2));
          7:	}
          8: } */
        op0:"A.	2",
        op1:"B.	3",
        op2:"C.	4",
        op3:"D.	None of the above",
        correcta:"3"
    },

{
            
        pregunta:"Which equivalent code can replace i -> i != 0 in the following line?",
        /*Predicate<Integer> ip = i -> i != 0;*/
        op0:"A. i -> { i != 0 }",
        op1:"B. i -> { i != 0; }",
        op2:"C.	i -> { return i != 0 }",
        op3:"D.	i -> { return i != 0; }",
        correcta:"3"
    },

{
            
        pregunta:"What is the output of the following?",
        /*LocalDate xmas = LocalDate.of(2016, 12, 25); 
        xmas.plusDays(-1); 
        System.out.println(xmas.getDayOfMonth()); */
        op0:"A.	24",
        op1:"B.	25",
        op2:"C.	26",
        op3:"D.	None of the above",
        correcta:"1"
    },

{
            
        pregunta:"What is the output of the following?",
        /*1:	public class Legos {
          2:	public static void main(String[] args) { 
          3:	tringBuilder sb = new StringBuilder();
          4:	sb.append("red");
          5:	sb.deleteCharAt(0);
          6:	sb.delete(1, 2);
          7:	System.out.println(sb);
          8:	}
          9:	}*/
        op0:"A.	e",
        op1:"B.	d",
        op2:"C.	ed",
        op3:"D.	None of the above",
        correcta:"0"
    },

{
            
        pregunta:"What does the following output?",
        /*Predicate clear = c -> c.equals("clear");
         System.out.println(clear.test("pink")); */
        op0:"A.	true",
        op1:"B.	false",
        op2:"C.	The code does not compile.",
        op3:"D.	The code compiles but throws an exception at runtime.",
        correcta:"1"
    },

{
            
        pregunta:"Which starts counting from one rather than zero?",
        op0:"A.	Array indexes",
        op1:"B.	The index used by charAt in a String",
        op2:"C.	The months in a LocalDateTime",
        op3:"D.	The months in a LocalTime",
        correcta:"2"
    },

{
            
        pregunta:"Which statement is not true of Predicate?",
        op0:"A.	A boolean is returned from the method it declares.",
        op1:"B.	It is an interface.",
        op2:"C.	The method it declares accepts two parameters.",
        op3:"D.	The method it declares is named test.",
        correcta:"2"
    },

{
            
        pregunta:".Which of these periods represents a larger amount of time?",
        /*Period period1 = Period.ofWeeks(1).ofDays(3);
         Period period2 = Period.ofDays(10); */
        op0:"A.	period1",
        op1:"B.	period2",
        op2:"C.	They represent the same length of time.",
        op3:"D.	None of the above. This code does not compile.",
        correcta:"1"
    },

{
            
        pregunta:"	What is the result of the following?",
        /*import java.time.*;
         import java.time.format.*;
         public class HowLong {
         public static void main(String[] args) { 
         LocalDate newYears = LocalDate.of(2017, 1, 1); 
         Period period = Period.ofDays(1);
         DateTimeFormatter format = DateTimeFormatter.ofPattern("MM-dd-yyyy");
          System.out.print(format.format(newYears.minus(period)));
          }
          }*/
        op0:" 01-01-2017",
        op1:"12-31-2016",
        op2:"C.	The code does not compile.",
        op3:"D.	The code compiles but throws an exception at runtime.",
        correcta:"1"
    },

{
            
        pregunta:"Which of the following can fill in the blank so the following code prints true?",
        /*String happy = " :) - (: "; 
        String really = happy.trim();
        String question =	; 
        System.out.println(really.equals(question));*/
        op0:"A.	happy.substring(0, happy.length() - 1)",
        op1:"B.	happy.substring(0, happy.length())",
        op2:"C.	happy.substring(1, happy.length() - 1)",
        op3:"D.	happy.substring(1, happy.length())",
        correcta:"2"
    },
{
    pregunta: "Which is not a true statement about the Period class?",
            op0:"A Period is immutable",
            op1:"A Period is typically used for adding or subtracting time from dates.",
            op2:"You can create a Period representing 2 minutes.",
            op3:"You can create a Period representing 5 years.",
            correcta:"2"

},

{
    pregunta: "What is the output of the following class?;",
          
         /* 1: package rocket;       
            2: public class Countdown {;      " +
            "3: public static void main(String[] args) 
            "4: StringBuilder builder = new StringBuilder("54321") 
            "5: builder.substring(2)
            "6: System.out.println(builder.charAt(1))
            "7: }, 2
            "8: } 
          */
            op0:"1",
            op1:"2",
            op2:"3",
            op3:"4",
            correcta:"3"

},

{
    pregunta: "What does the following output?",
             /* List<Integer> pennies = new ArrayList<>();
             pennies.add(3);     
             pennies.add(2);
             pennies.add(1);   
             pennies.remove(2);   
             System.out.println(pennies);"
              */
            op0:". [3, 1]",
            op1:" [3, 2]",
            op2:"The code does not compile.",
            op3:"The code compiles but throws an exception at runtime.",
            correcta:"1"

},

{
    pregunta: "The author of this method forgot to include the data type. Which of the following reference types can best fill in the blank to complete this method?",
              /*public static void secret( mystery) {
              char ch = mystery.charAt(3);
              mystery = mystery.insert(1, "more");
              int num = mystery.length();
              }",
               */
            op0:"ArrayList",
            op1:"String",
            op2:"StringBuilder",
            op3:"None of the above",
            correcta:"2"

},

{
    pregunta: "What is the smallest unit you can add to a LocalTime object?",
            op0:"Second",
            op1:"Millisecond",
            op2:"Nanosecond",
            op3:"Picosecond",
            correcta:"2"

},

{
    pregunta: "What is the result of the following?",
             /* import java.time.*;
              import java.time.format.*;
              public class HowLong {
              public static void main(String[] args) {
              LocalDate newYears = LocalDate.of(2017, 1, 1);
              Period period = Period.ofDays(1);
              DateTimeFormatter format = DateTimeFormatter.ofPattern("mm-dd-yyyy");
              System.out.print(format.format(newYears.minus(period)));" 
              */
            op0:"01-01-2017",
            op1:"12-31-2016",
            op2:"The code does not compile.",
            op3:"The code compiles but throws an exception at runtime.",
            correcta:"3"

},

{
    pregunta: "Which of the following types can you pass as a parameter to the replace() method on the String class?",
          /*  I. char
            II. String
            III. StringBuilder
            */
            op0:"I",
            op1:" and II",
            op2:"II and III",
            op3:"I, II, and III",
            correcta:"3"

},

{
    pregunta: "How many lines does this code output?",
           /* import java.util.*;
              import java.util.function.*;
              public class PrintNegative {
              public static void main(String[] args) {
              List<String> list = new ArrayList<>();
              list.add("-5");
              list.add("0");
              list.add("5");
              print(list, e -> e < 0);
              }
              public static void print(List<String> list, Predicate<Integer> p) {
              for (String num : list)
              if (p.test(num))
              System.out.println(num);
              }
              }
            */
            op0:"A. One",
            op1:"Two",
            op2:"None. The code does not compile.",
            op3:"None. The code throws an exception at runtime.",
            correcta:"2"

},

{
    pregunta: "What is the output of the following?",
           /* 12: List<String> magazines = new ArrayList();
              13: magazines.add("Readers Digest");
              14: magazines.add("People");
              15: magazines.clear();
              16: magazines.add("The Economist");
              17: magazines.remove(1);
              18: System.out.println(magazines.size());
            */
            op0:"0",
            op1:"1",
            op2:"The code does not compile.",
            op3:"The code compiles but throws an exception at runtime.",
            correcta:"3"
            
},

{
    pregunta: ". What is the output of the following?",
           /* public class Costume {
              public static void main(String[] black) {
              String witch = 'b';
              String tail = "lack";
              witch = witch.concat(tail);
              System.out.println(witch);
              }
              { 
              */
            op0:"b",
            op1:"black",
            op2:"The code does not compile.",
            op3:"The code compiles but throws an exception at runtime.",
            correcta:"2"

},

{
    pregunta: "What is the result of the following?",
           /* LocalDate xmas = LocalDate.of(2016, 12, 25);
              xmas.setYear(2017);
              System.out.println(xmas.getYear());" +
              */
            op0:"2016",
            op1:"2017",
            op2:"The code does not compile.",
            op3:"The code compiles but throws an exception at runtime",
            correcta:"2"

},
{
    pregunta:"Fill in the blanks: The operators +=, 	, 	, 	, 	, and ++ are listed in increasing or the same level of operator precedence. (Choose two.)",
    op0:"–, +, =, --",
    op1:"%, *, /, +",
    op2:"=, +, /, *",
    op3:"^, *, -, ==",
    correcta:"0"
    },

{
    pregunta:"Which of the following are valid JavaBean signatures? (Choose three.)",
    op0:"public byte getNose(String nose)",
    op1:"public void setHead(int head)",
    op2:"public String getShoulders()",
    op3:"public long isMouth()",
    correcta:"3"
    },

{
    pregunta:"Which of the following are true? (Choose two.)",
    op0:"int[] crossword [] = new int[10][20];",
    op1:"for (int i = 0; i < crossword.length; i++) ",
    op2:"for (int j = 0; j < crossword.length; j++) ",
    op3:"crossword[i][j] = 'x';",
    correcta:"1"
    },

{
    pregunta:"Which of the following statements about java.lang.Error are most accurate? (Choose two.)",
    op0:"An Error should be thrown if a file system resource becomes temporarily unavailable.",
    op1:"An application should never catch an Error.",
    op2:"Error is a subclass of Exception, making it a checked exception.",
    op3:"It is possible to catch and handle an Error thrown in an application.",
    correcta:"1"
    },

{
    pregunta:"Given a class that uses the following import statements, which class would be automati- cally accessible without using its full package name? (Choose three.) import forest.Bird; import jungle.tree.*; import savana.*;",
    op0:"forest.Bird",
    op1:"savana.sand.Wave",
    op2:"jungle.tree.Huicungo",
    op3:"java.lang.Object",
    correcta:"2"
    },

{
    pregunta:"How many of the following variables represent immutable objects? ArrayList l = new ArrayList(); String s = new String();StringBuilder sb = new StringBuilder(); LocalDateTime t = LocalDateTime.now();",
    op0:"None",
    op1:"One",
    op2:"Two",
    op3:"Three",
    correcta:"0"
    },

{
    pregunta:"What is the output of the following? StringBuilder builder = new StringBuilder(Leaves growing); do {builder.delete(0, 5);} while (builder.length() > 5); System.out.println(builder);",
    op0:"Leaves growing",
    op1:"ing",
    op2:"wing",
    op3:"The code does not compile.",
    correcta:"3"
    },

{
    pregunta:"What is the output of the following application? package reality;public class Equivalency {public static void main(String[] edges) { final String ceiling = up;String floor = new String(up);final String wall = new String(floor); System.out.print((ceiling==wall)++(floor==wall)++ceiling.equals(wall));}}",
    op0:"false false false",
    op1:"true true true",
    op2:"false true true",
    op3:"false false true",
    correcta:"2"
    },

{
    pregunta:"How many times does the following code print true? 1:	public class Giggles {2:	public static void main(String[] args) { 3:		String lol = lol;4:	System.out.println(lol.toUpperCase() == lol);5:	System.out.println(lol.toUpperCase() == lol.toUpperCase()); 6:	System.out.println(lol.toUpperCase().equals(lol));7:	System.out.println(lol.toUpperCase().equals(lol.toUpperCase()));8:	System.out.println(lol.toUpperCase().equalsIgnoreCase(lol));9:	System.out.println(lol.toUpperCase()10:	.equalsIgnoreCase(lol.toUpperCase()));11: } }",
    op0:"One",
    op1:"Two",
    op2:"Three",
    op3:"Five",
    correcta:"3"
    },

{
    pregunta:"Which lines can be removed together without stopping the code from compiling and while printing the same output? (Choose three.) 14: String race = ; 15: outer:16: do {17: inner:18:	do {19:	race += x;20:	} while (race.length() <= 4);21: } while (race.length() < 4);22: System.out.println(race);",
    op0:"Lines 15 and 17",
    op1:"Lines 15, 16, and 21",
    op2:"Line 17",
    op3:"Lines 17, 18, and 20",
    correcta:"1"
    },

{
    pregunta:"Which of the following do not compile when filling in the blank? (Choose two.) long bigNum = 	;",
    op0:"1234",
    op1:"1234.0",
    op2:"1234.0L",
    op3:"1234l",
    correcta:"0"
    },

{
    pregunta:"How many lines does this program print? import java.time.*; public class OnePlusOne {public static void main(String... nums) { LocalTime time = LocalTime.of(1, 11); while (time.getHour() < 1) {time.plusHours(1); System.out.println(in loop);}}}",
    op0:"None",
    op1:"One",
    op2:"Two",
    op3:"This is an infinite loop.",
    correcta:"1"
    },

{
    pregunta:"What is the result of running the following program? 1:	package fun;2:	public class Sudoku { 3:		static int[][] game; 4:5:	public static void main(String args[]) { 6:		game[3][3] = 6;7:	Object[] obj = game;8:	obj[3] = 'X';9:	System.out.println(game[3][3]);10:	}11: }",
    op0:"6",
    op1:"X",
    op2:"The code does not compile.",
    op3:"The code compiles but throws a NullPointerException at runtime.",
    correcta:"3"
    },

{
    pregunta:"Which of the following use generics and compile without warnings? (Choose two.)",
    op0:"List<String> a = new ArrayList();",
    op1:"List<> b = new ArrayList();",
    op2:"List<String> c = new ArrayList<>();",
    op3:"List<> d = new ArrayList<>();",
    correcta:"2"
    },

{
    pregunta:"Which of the following are true right before the main() method ends? (Choose two.) public static void main(String[] args) { String shoe1 = new String(sandal); String shoe2 = new String(flip flop); String shoe3 = new String(croc);shoe1 = shoe2; shoe2 = shoe3; shoe3 = shoe1;}",
    op0:"No objects are eligible for garbage collection.",
    op1:"One object is eligible for garbage collection.",
    op2:"Two objects are eligible for garbage collection.",
    op3:"No objects are guaranteed to be garbage collected.",
    correcta:"0"
    },

{
    pregunta:"How many lines of the following application do not compile? package ocean;class BubbleException extends Exception {} class Fish {Fish getFish() throws BubbleException { throw new RuntimeException(fish!);}}public final class Clownfish extends Fish { public final Clownfish getFish() {throw new RuntimeException(clown!);}public static void main(String[] bubbles) { final Fish f = new Clownfish();f.getFish(); System.out.println(swim!);}}",
    op0:"None. The code compiles and prints swim!.",
    op1:"None. The code compiles and prints a stack trace.",
    op2:"One",
    op3:"Two",
    correcta:"3"
    },

{
    pregunta:"How many lines does this code output? import java.util.*;import java.util.function.*; public class PrintNegative {public static void main(String[] args) { List<Integer> list= new ArrayList<>(); list.add(-5);list.add(0);list.add(5);print(list, e -> e < 0);}public static void print(List<Integer> list, Predicate<Integer> p) { for (Integer num : list)if (p.test(num)) System.out.println(num);}}",
    op0:"One",
    op1:"Two",
    op2:"Three",
    op3:"None. It doesnt compile.",
    correcta:"2"
    },

{
    pregunta:"Which keywords are required with a try statement?",
    op0:"finalize",
    op1:"catch",
    op2:"throws",
    op3:"finally",
    correcta:"1"
    },

{
    pregunta:"What is the output of the following? 12: int result = 8;13: loop: while (result > 7) { 14:	result++;15:	do {16:	result--;17:	} while (result > 5);18:	break loop;19: }20: System.out.println(result);",
    op0:"5",
    op1:"7",
    op2:"8",
    op3:"The code does not compile.",
    correcta:"2"
    },

{
    pregunta:"What is the result of compiling and executing the following application? package reptile;public class Alligator { static int teeth; double scaleToughness; public Alligator() {teeth++;}public void snap(int teeth) { System.out.print(teeth+); teeth--;}public static void main(String[] unused) { new Alligator().snap(teeth);new Alligator().snap(teeth);}}",
    op0:"0 1",
    op1:"1 1",
    op2:"1 2",
    op3:"2 2",
    correcta:"0"
    },

{
    pregunta:"What is the output of the following? public class Costume {public static void main(String[] black) { String witch = ;String tail = lack; witch.concat(tail); System.out.println(witch);}}",
    op0:"b",
    op1:"black",
    op2:"lack",
    op3:"The code does not compile.",
    correcta:"0"
    },

{
    pregunta:"Which modifiers can be independently applied to an interface method? (Choose three.)",
    op0:"default",
    op1:"protected",
    op2:"static",
    op3:"private",
    correcta:"1"
    },

{
    pregunta:"What is the output of the following? public class Shoelaces {public static void main(String[] args) { String tie = null;while (tie = null) tie = shoelace;System.out.print(tie);}}",
    op0:"null",
    op1:"shoelace",
    op2:"shoelaceshoelace",
    op3:"The code does not compile.",
    correcta:"2"
    },

{
    pregunta:"What statements are true about compiling a Java class file? (Choose two.)",
    op0:"If the file does not contain a package statement, then the compiler considers the class part of the java.lang package.",
    op1:"The compiler assumes every class implicitly imports the java.lang.* package.",
    op2:"The compiler assumes every class implicitly imports the java.util.* package.",
    op3:"Java requires every file to declare a package statement.",
    correcta:"3"
    },

{
    pregunta:"What is the output of the following application? package woods; interface Plant {default String grow() { return Grow!; }}interface Living {public default String grow() { return Growing!; }}public class Tree implements Plant, Living { // m1public String grow(int height) { return Super Growing!; } public static void main(String[] leaves) {Plant p = new Tree(); // m2 System.out.print(((Living)p).grow()); // m3}}",
    op0:"Grow!",
    op1:"Growing!",
    op2:"Super Growing!",
    op3:"It does not compile because of line m1.",
    correcta:"3"
    },

{
    pregunta:"What is the result of the following? public static void main(String... args) { String name = Desiree;int _number = 694; boolean profit$$$;System.out.println(name +  won. + _number +  profit?  + profit$$$);}",
    op0:"The declaration of name does not compile.",
    op1:"The declaration of _number does not compile.",
    op2:"The declaration of profit$$$ does not compile.",
    op3:"The println statement does not compile.",
    correcta:"0"
    },

{
    pregunta:"Fill in the blanks: Given a variable x, 	 decreases the value of x by 1 and returns the original value, while 	 increases the value of x by 1 and returns the new value.",
    op0:"x--, ++x",
    op1:"x--, x++",
    op2:"--x, x++",
    op3:"--x, ++x",
    correcta:"1"
    },

{
    pregunta:"Given the following two classes in the same package, which constructors contain compiler errors? (Choose three.) public class Big {public Big(boolean stillIn) { super();}}public class Trouble extends Big { public Trouble() {}public Trouble(int deep) { super(false);this();}public Trouble(String now, int... deep) { this(3);}public Trouble(long deep) { this(check,deep);}public Trouble(double test) { super(test>5 ? true : false);}}",
    op0:"public Big(boolean stillIn)",
    op1:"public Trouble()",
    op2:"public Trouble(int deep)",
    op3:"public Trouble(String now, int... deep)",
    correcta:"3"
    },

{
    pregunta:"Which of the following can replace the comment so this code outputs 100? (Choose two.) public class Stats {// INSERT CODEpublic static void main(String[] math) { System.out.println(max - min);}}",
    op0:"final int min, max = 100;",
    op1:"final int min = 0, max = 100;",
    op2:"int min, max = 100;",
    op3:"int min = 0, max = 100;",
    correcta:"2"
    },

{
    pregunta:"Which of the following statements are true about Java operators and statements? (Choose two.)",
    op0:"Both right-hand sides of the ternary expression will be evaluated at runtime.",
    op1:"A switch statement may contain at most one default statement.",
    op2:"A single if-then statement can have multiple else statements.",
    op3:"The | and || operator are interchangeable, always producing the same results at runtime.",
    correcta:"0"
    },

{
    pregunta:"What is the output of the following? 1:	public class Legos {2:	public static void main(String[] args) { 3:		StringBuilder sb = new StringBuilder(); 4:		sb.append(red);5:	sb.deleteCharAt(0);6:	sb.delete(1, 1);7:	System.out.println(sb);8:	}9:	}",
    op0:"r",
    op1:"e",
    op2:"ed",
    op3:"The code does not compile.",
    correcta:"1"
    },

{
    pregunta:"Which of the following is a valid method name in Java? (Choose two.)",
    op0:"()",
    op1:"% run()",
    op2:"check-Activity()",
    op3:"$Hum2()",
    correcta:"3"
    },

{
    pregunta:"Which of the following statements about inheritance are true? (Choose two.)",
    op0:"Inheritance is better than using static methods for accessing data in other classes.",
    op1:"Inheritance allows a method to be overridden in a subclass, possibly changing the expected behavior of other methods in a superclass.",
    op2:"Inheritance allows objects to inherit commonly used attributes and methods.",
    op3:"It is possible to create a Java class that does not inherit from any other.",
    correcta:"2"
    },

{
    pregunta:"Which of the following statements about Java are true?",
    op0:"The java command uses . to separate packages.",
    op1:"Java supports functional programming.",
    op2:"Java is object oriented.",
    op3:"Java supports polymorphism.",
    correcta:"1"
    },


{
    pregunta:"What is the output of the following? String[][] listing = new String[][] { { Book, 34.99 },{ Game, 29.99 }, { Pen .99 } };System.out.println(listing.length +  + listing[0].length);",
    op0:"2 2",
    op1:"2 3",
    op2:"3 2",
    op3:"3 3",
    correcta:"0"
    },

{
    pregunta:"Which of the following variable types is permitted in a switch statement? (Choose three.)",
    op0:"Character",
    op1:"Byte",
    op2:"Double",
    op3:"long",
    correcta:"2"
    },

{
    pregunta:"What does the following do? public class Shoot { interface Target {boolean needToAim(double angle);}static void prepare(double angle, Target t) { boolean ready = t.needToAim(angle); // k1 System.out.println(ready);}public static void main(String[] args) { prepare(45, d => d > 5 || d < -5);	// k2}}",
    op0:"It prints true.",
    op1:"It prints false.",
    op2:"It doesnt compile due to line k1.",
    op3:"It doesnt compile due to line k2.",
    correcta:"3"
    },

{
    pregunta:"Which of the following is a valid code comment in Java? (Choose three.)",
    op0:"/** Insert */ in next method **/",
    op1:"/****** Find the kitty cat */",
    op2:"// Is this a bug?",
    op3:"/ Begin method - performStart() /",
    correcta:"1"
    },

{
    pregunta:"Given the following two classes, each in a different package, which lines allow the second class to compile when inserted independently? (Choose two.) package food;public class Grass {public static int seeds = 10;public static Grass getGrass() {return new Grass();}}package woods;// INSERT CODE HEREpublic class Deer { public void eat() {getGrass(); System.out.print(seeds);}}",
    op0:"import static food.Grass.getGrass; import static food.Grass.seeds;",
    op1:"import static food.*;",
    op2:"static import food.Grass.*;",
    op3:"import food.Grass.*;",
    correcta:"2"
    },

{
    pregunta:"What is the result of the following? import java.util.*; public class Museums {public static void main(String[] args) {String[] array = {Natural History, Science, Art}; List<String> museums = Arrays.asList(array); museums.remove(2);System.out.println(museums);}}",
    op0:"[Natural History, Science]",
    op1:"[Natural History, Science, Art]",
    op2:"The code does not compile.",
    op3:"The code compiles but throws an exception at runtime.",
    correcta:"0"
    },

{
    pregunta:"Which of the following substitutions will compile? (Choose two.) public class Underscores {public String name = Sherrin; public void massage() {int zip = 10017;}}",
    op0:"Change name to _name",
    op1:"Change 10017 to _10017",
    op2:"Change 10017 to 10017_",
    op3:"Change 10017 to 10_0_17",
    correcta:"1"
    },

{
    pregunta:"What is the result of the following when called as java counting.Binary? package counting; import java.util.*; public class Binary {public static void main(String[] args) {args = new String[] {0, 1, 01, 10 };Arrays.sort(args); System.out.println(Arrays.toString(args));}}",
    op0:"[]",
    op1:"[0, 01, 1, 10]",
    op2:"[0, 01, 10, 1]",
    op3:"[0, 1, 01, 10]",
    correcta:"3"
    },

{
    pregunta:"Fill in the blanks: Using the 	 and 	 modifiers together allows a variable to be accessed from any class, without requiring an instance variable.",
    op0:"final, package-private",
    op1:"class, static",
    op2:"protected, instance",
    op3:"public, static",
    correcta:"0"
    },

{
    pregunta:"How many lines does the following code output? import java.util.*; public class Exams {public static void main(String[] args) { List<String> exams = Arrays.asList(OCA, OCP); for (String e1 : exams)for (String e2 : exams) System.out.print(e1 +  + e2); System.out.println();}}",
    op0:"One",
    op1:"Four",
    op2:"Five",
    op3:"The code does not compile.",
    correcta:"1"
    },

{
    pregunta:"Which of the following are true statements? (Choose two.)",
    op0:"The javac command compiles a source text file into a set of machine instructions.",
    op1:"The java command compiles a .class file into a .java file.",
    op2:"The javac command compiles a .java file into a .class file.",
    op3:"The javac command compiles a source text file into a bytecode file.",
    correcta:"2"
    },

{
    pregunta:"How many of the following lines of code compile? char one = Integer.parseInt(1); Character two = Integer.parseInt(2); int three = Integer.parseInt(3); Integer four = Integer.parseInt(4); short five = Integer.parseInt(5); Short six = Integer.parseInt(6);",
    op0:"None",
    op1:"One",
    op2:"Two",
    op3:"Three",
    correcta:"0"
    },

{
    pregunta:"Given the application below, what data types can be inserted into the blank that would allow the code to print 3? (Choose three.) public class Highway {public int drive(long car) { return 2; } public int drive(double car) { return 3; } public int drive(int car) { return 5; } public int drive(short car) { return 3; } public static void main(String[] gears) { value = 5;System.out.print(new Highway().drive(value));}}",
    op0:"boolean",
    op1:"short",
    op2:"int",
    op3:"byte",
    correcta:"3"
    },

{
    pregunta:"How many times does this code print true? import java.time.*; public class Equality {public void main(String[] args) { System.out.println(new StringBuilder(zelda)== new StringBuilder(zelda));System.out.println(3 == 3); System.out.println(bart == bart); System.out.println(new int[0] == new int[0]);System.out.println(LocalTime.now() == LocalTime.now());}}",
    op0:"None",
    op1:"One",
    op2:"Two",
    op3:"Three",
    correcta:"2"
    },

{
    pregunta:"What is the output of the following application? package ballroom; public class Dance {public static void swing(int... beats) throws ClassCastException { try {System.out.print(1+beats[2]); // p1} catch (RuntimeException e) { System.out.print(2);} catch (Exception e) { System.out.print(3);} finally { System.out.print(4);}}public static void main(String... music) { new Dance().swing(0,0); // p2 System.out.print(5);}}",
    op0:"145",
    op1:"1045",
    op2:"24, followed by a stack trace",
    op3:"245",
    correcta:"1"
    },

{
    pregunta:"What is the output of the following? List<String> drinks = Arrays.asList(can, cup);for (int container = drinks.size(); container > 0; container++) { System.out.print(drinks.get(container-1) + );}",
    op0:"can,cup,",
    op1:"cup,can,",
    op2:"The code does not compile.",
    op3:"This is an infinite loop.",
    correcta:"3"
    },

{
    pregunta:"Which of the following method signatures are valid declarations of an entry point in a Java application? (Choose three.)",
    op0:"public static void main(String... widgets)",
    op1:"public static void main(String sprockets)",
    op2:"protected static void main(String[] args)",
    op3:"public static int void main(String[] arg)",
    correcta:"0"
    },

{
    pregunta:"Given the application below and the choices available, which lines must all be removed to allow the code to compile? (Choose three.) 1: package year;2: public class Seasons {3:	public static void main(String[] time) { 4:		final long winter = 10;5:	final byte season = 2;6:	int fall = 4;7:	final short summer = 3;8:	switch(season) {9:	case 1:10:	case winter: System.out.print(winter); 11:	default:12:	case fall: System.out.print(fall);13:	case summer: System.out.print(summer); 14:	default:15:	}16:	}17: }",
    op0:"Line 8",
    op1:"Line 9",
    op2:"Line 10",
    op3:"Line 11",
    correcta:"1"
    },

{
    pregunta:"Given the application below, which lines do not compile? (Choose three.) package furryfriends; interface Friend {protected String getName(); // h1}class Cat implements Friend {String getName() { // h2 return Kitty;}}public class Dog implements Friend {String getName() throws RuntimeException { // h3 return Doggy;}public static void main(String[] adoption) { Friend friend = new Dog(); // h4System.out.print(((Cat)friend).getName()); // h5 System.out.print(((Dog)null).getName()); // h6}}",
    op0:"Line h1",
    op1:"Line h2",
    op2:"Line h3",
    op3:"Line h4",
    correcta:"3"
    },

{
    pregunta:"Which of the following are unchecked exceptions? (Choose three.)",
    op0:"FileNotFoundException",
    op1:"ArithmeticException",
    op2:"IOException",
    op3:"Exception",
    correcta:"0"
    },

{
    pregunta:"What is the result of compiling and executing the following application? package ranch;public class Cowboy { private int space = 5;private double ship = space < 2 ? 1 : 10; // g1 public void printMessage() {if(ship>1) { System.out.println(Goodbye);} if(ship<10 && space>=2) System.out.println(Hello); // g2 else System.out.println(See you again);}public static final void main(String... stars) { new Cowboy().printMessage();}}",
    op0:"It only prints Hello.",
    op1:"It only prints Goodbye.",
    op2:"It only prints See you again.",
    op3:"It does not compile because of line g1.",
    correcta:"2"
    },

{
    pregunta:"Given the following three class declarations, which sets of access modifiers can be inserted, in order, into the blank lines below that would allow all of the classes to compile? (Choose three.) package wake;public class Alarm {static int clock;long getTime() {return clock;}}package wake;public class Coffee {private boolean bringCoffee() { return new Alarm().clock<10;}}package sleep;public class Snooze extends wake.Alarm {private boolean checkTime() { return getTime()>10;}}",
    op0:"protected and package-private (blank)",
    op1:"public and public",
    op2:"package-private (blank) and protected",
    op3:"protected and protected",
    correcta:"1"
    },


{
    pregunta:"Given that FileNotFoundException is a subclass of IOException and Long is a subclass of Number, what is the output of the following application?package materials; import java.io.*;class CarbonStructure { protected long count;public abstract Number getCount() throws IOException; // q1 public CarbonStructure(int count) { this.count = count; }}public class Diamond extends CarbonStructure { public Diamond() { super(15); }public Long getCount() throws FileNotFoundException { // q2 return count;}public static void main(String[] cost) { try {final CarbonStructure ring = new Diamond(); // q3 System.out.print(ring.getCount()); // q4} catch (IOException e) { e.printStackTrace();}}}",
    op0:"15",
    op1:"It does not compile because of line q1.",
    op2:"It does not compile because of line q2.",
    op3:"It does not compile because of line q3.",
    correcta:"2"
    },

{
    pregunta:"How many lines contain a compile error? 1:	import java.time.*;2:	import java.time.format.*;3:4:	public class HowLong {5:	public void main(String h) {6:	LocalDate newYears = new LocalDate(2017, 1, 1); 7:	Period period = Period.ofYears(1).ofDays(1);8:	DateTimeFormat format = DateTimeFormat.ofPattern(MM-dd-yyyy); 9:	System.out.print(format.format(newYears.minus(period)));10:	}11: }",
    op0:"None",
    op1:"One",
    op2:"Two",
    op3:"Three",
    correcta:"0"
    },

{
    pregunta:"Which of the following statements about try-catch blocks are correct? (Choose two.)",
    op0:"A catch block can never appear after a finally block.",
    op1:"A try block must be followed by a catch block.",
    op2:"A finally block can never appear after a catch block.",
    op3:"A try block must be followed by a finally block.",
    correcta:"1"
    },

{
    pregunta:"61.	What is printed by the following code snippet? int fish = 1 + 2 * 5>=2 ? 4 : 2;int mammals = 3 < 3 ? 1 : 5>=5 ? 9 : 7; System.out.print(fish+mammals+);",
    op0:"49",
    op1:"13",
    op2:"18",
    op3:"99",
    correcta:"3"
    },
{
        
    pregunta:"How many lines of the following application do not compile?",
    op0:"None. The code compiles and produces a stack trace at runtime..",
    op1:"One",
    op2:" Two",
    op3:"Three",
     op4:"Four",
    correcta:"1"

},
 {
    
    pregunta:"Choose the best answer:  and  are two properties that go hand in hand to improve class design by structuring a class with related attributes and actions while protecting the underlying data from access by other classes.",
    op0:"Optimization and platform independence",
    op1:"Platform independence and encapsulation",
    op2:"Platform independence and inheritance",
    op3:"Object orientation and encapsulation.",
     op4:"Inheritance and polymorphism.",
    correcta:"3"

},
{
    
    pregunta:"What is the output of the following?",
    op0:"false  false",
    op1:"false true",
    op2:"true false",
    op3:"true true ",
     op4:"The code does not compile.",
    correcta:"3"

},
 {
    
    pregunta:"What is the output of the following when run as java EchoFirst seed flower plant?",
    op0:"0",
    op1:"1",
    op2:"2",
    op3:"The code does not compile.",
     op4:"The code compiles but throws an exception at runtime.",
    correcta:"0"

},
{
    
    pregunta:"Which are true statements? (Choose three.)",
    op0:"Every    do-while loop can be rewritten as a for-each loop.",
    op1:"Every    for-each loop can be rewritten as a do-while loop.",
    op2:"Every    for-each loop can be rewritten as a traditional for loop.",
    op3:"Every    for-each loop can be rewritten as a while loop.",
     op4:"Every traditional for loop can be rewritten as a for-each loop.",
    correcta:"2"

},
{
    
    pregunta:"How many lines does this program print?  ",
    op0:"None",
    op1:"One",
    op2:"Two",
    op3:"This is an infinite loop.",
    op4:"The code does not compile.",
    correcta:"4"

},
{
    
    pregunta:"How many objects are eligible for garbage collection immediately before the end of the main() method?",
    op0:"None.",
    op1:"One",
    op2:"Two",
    op3:"Three",
     op4:"Four",
    correcta:"2"

},
{
pregunta:"What is the output of the following?",
    op1:"1",
    op2:"3",
    op3:"9",
     op4:"This is an infinite loop.",
    correcta:"4"
},
    {
    pregunta:"How many lines of the following class do not compile?",
    op0:"None, the class compliles writhout issue.",
    op1:"One",
    op2:"Two",
    op3:"Trhee",
    op4:"Four",
    correcta:"4"

},
 {
    pregunta:"In which places is the default keyword permitted to be used? (Choose two.)",
    op0:"Access modifier in a class",
    op1:"Execution path in a switch statement",
    op2:"Method name",
    op3:"Modifier in an abstract interface methodE.Modifier in an interface method with a body",
    op4:"Four",
    correcta:"3"

},
{
    pregunta:"whitch answer choice can remplace line 6 so the code continues to produce the same output ?",
    op0:"system.out.println.(rug.asString)",
    op1:"system.out.println(rug.asString())",
    op2:"system.out.println.rug.toString)",
    op3:"system.out.println",
    correcta:"0"
},

{
    pregunta:"whitch best describes this code ? ",
    op0:"it is a singleton",
    op1:"it is well encapsulated",
    op2:"it is immuable",
    op3:"it is both well encapsulated and immutable",
    correcta:"3"
},

{
    pregunta:"what desing pattern or principle ensures that there will be no more than one instance of a class?",
    op0:"encapsulation",
    op1:"immutability",
    op2:"singleton",
    op3:"static",
    correcta:"2"
}


   
    
]

let respuestas = [];
let cantiCorrectas = 0;
let numPregunta = 0;

function cargarPreguntas(){
    const pregunta = bd_juego[numPregunta];

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    const h2 = document.createElement("h2");
    h2.textContent = "Pregunta " + (numPregunta + 1) + ": " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");

    const label1 = crearLabel("0", pregunta.op0);
    const label2 = crearLabel("1", pregunta.op1);
    const label3 = crearLabel("2", pregunta.op2);
    const label4 = crearLabel("3", pregunta.op3);

    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);
    opciones.appendChild(label4);

    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

function crearLabel(num, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.setAttribute("onclick", "seleccionar(" + numPregunta + "," + num + ")");
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

for (let i = 0; i < bd_juego.length; i++){
    cargarPreguntas();
    numPregunta++;
}

function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}

let corregir = document.getElementById("corregir");
corregir.onclick = function(){
    for (let i = 0; i < bd_juego.length; i++){
        const pregunta = bd_juego[i];
        if (pregunta.correcta == respuestas[i]){
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById("l" + i + pregunta.correcta).className = "correcta";
            document.getElementById(idCorreccion).innerHTML = "&#10003;";
            document.getElementById(idCorreccion).className = "acierto";
        } else {
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById("l" + i + respuestas[i]).className = "incorrecta";
            document.getElementById(id).innerHTML = "&#10007;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&#10003;";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }

    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++){
        inputs[i].disabled = true;
    }

    window.scrollTo(0, 0);
    let h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (10 - cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
}
