package com.example.project.Model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="beach")
public class beach {
	@Id
	  private String maila;
	    private String fname;
//	    private String rtype;
	    private int nguest;
	    private java.sql.Date adate;
	    private String atime;
	    private int phone;
	    private String address;




	


		public String getMaila() {
			return maila;
		}







		public void setMaila(String maila) {
			this.maila = maila;
		}







		public String getFname() {
			return fname;
		}







		public void setFname(String fname) {
			this.fname = fname;
		}







		public int getNguest() {
			return nguest;
		}







		public void setNguest(int nguest) {
			this.nguest = nguest;
		}







		public java.sql.Date getAdate() {
			return adate;
		}







		public void setAdate(java.sql.Date adate) {
			this.adate = adate;
		}







		public String getAtime() {
			return atime;
		}







		public void setAtime(String atime) {
			this.atime = atime;
		}







		public int getPhone() {
			return phone;
		}







		public void setPhone(int phone) {
			this.phone = phone;
		}







		public String getAddress() {
			return address;
		}







		public void setAddress(String address) {
			this.address = address;
		}







		public beach(String maila, String fname, int nguest, Date adate, String atime, int phone, String address) {
			super();
			this.maila = maila;
			this.fname = fname;
			this.nguest = nguest;
			this.adate = adate;
			this.atime = atime;
			this.phone = phone;
			this.address = address;
		}







		public beach()
	    {
			
	    }
	    
	    
	    
}
