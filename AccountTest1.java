package collabera;
import java.util.Scanner;
public class AccountTest1 {
	double rate;
	int month;
	public void bond() {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter your maturity month:");
		month=sc.nextInt();
		if(month>0 && month<=11) {
		rate=0.5;
			}
		else if(month>=12 && month<=23) {
			rate=1.0;
		}
		else if(month>=24 && month<=35) {
			rate=1.5;
		}
		else if(month>=36 && month<=47) {
			rate=2.0;
		}
		else if(month>=48 && month<=60) {
			rate=2.5;
		}
		System.out.println("Rate is "+ rate);
			
	}
	public static void main(String[]args) {
		AccountTest1 t=new AccountTest1();
		t.bond();
	}

}
