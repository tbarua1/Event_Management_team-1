package demo;

public class A {
	public static  int x=20;
	public static void b() {
		int count=15;
		int a,b,c,d;
		a=count++;
		b=count;
		c=++count;
		d=count;
		System.out.println(a+","+b+","+c+","+d);
	}
	public static void main(String[] args) {
	   int y=0;
		y=x;
		++y;
		System.out.println("x is :"+x);
		System.out.println("y is :"+y);
		b();
		System.out.println("this is anand git hub account");
	}
	

}
