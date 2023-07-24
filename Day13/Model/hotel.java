package com.example.project.Model;

import java.sql.Date;
import java.sql.Time;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="hotel")
public class hotel {
	@Id
    private String maila;
    private String fname;
    private String rtype;
    private int nguest;
    private java.sql.Date adate;
    private String atime;
    private String fpickup;
    private int fnumber;
    private String srequest;
    


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
















	public String getRtype() {
		return rtype;
	}
















	public void setRtype(String rtype) {
		this.rtype = rtype;
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
















	public String getFpickup() {
		return fpickup;
	}
















	public void setFpickup(String fpickup) {
		this.fpickup = fpickup;
	}
















	public int getFnumber() {
		return fnumber;
	}
















	public void setFnumber(int fnumber) {
		this.fnumber = fnumber;
	}
















	public String getSrequest() {
		return srequest;
	}
















	public void setSrequest(String srequest) {
		this.srequest = srequest;
	}
















	public hotel(String maila, String fname, String rtype, int nguest, Date adate, String atime, String fpickup,
			int fnumber, String srequest) {
		super();
		this.maila = maila;
		this.fname = fname;
		this.rtype = rtype;
		this.nguest = nguest;
		this.adate = adate;
		this.atime = atime;
		this.fpickup = fpickup;
		this.fnumber = fnumber;
		this.srequest = srequest;
	}














	public hotel()
    {
    }
}
