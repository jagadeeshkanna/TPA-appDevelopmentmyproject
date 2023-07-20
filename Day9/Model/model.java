package com.example.project.Model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="model")
public class model {
    @Id
    private String Firs_Name;
	private String Last_Name;
	private String Email;
	private String Room_TYpe;
	private int Number_of_Guests;
	private  Date Arrival_Date;
	private Date Departure_Date;
	private int Flight_Number;
	private String Special_Request;
     public String getFirs_Name(){
		return Firs_Name;
	}
	public void setFirs_Name(String firs_Name) {
		Firs_Name = firs_Name;
	}
	public String getLast_Name() {
		return Last_Name;
	}
	public void setLast_Name(String last_Name) {
		Last_Name = last_Name;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getRoom_TYpe() {
		return Room_TYpe;
	}
	public void setRoom_TYpe(String room_TYpe) {
		Room_TYpe = room_TYpe;
	}
	public int getNumber_of_Guests() {
		return Number_of_Guests;
	}
	public void setNumber_of_Guests(int number_of_Guests) {
		Number_of_Guests = number_of_Guests;
	}
	public Date getArrival_Date() {
		return Arrival_Date;
	}
	public void setArrival_Date(Date arrival_Date) {
		Arrival_Date = arrival_Date;
	}
	public Date getDeparture_Date() {
		return Departure_Date;
	}
	public void setDeparture_Date(Date departure_Date) {
		Departure_Date = departure_Date;
	}
	public int getFlight_Number() {
		return Flight_Number;
	}
	public void setFlight_Number(int flight_Number) {
		Flight_Number = flight_Number;
	}
	public String getSpecial_Request() {
		return Special_Request;
	}
	public void setSpecial_Request(String special_Request) {
		Special_Request = special_Request;
	}
	public model(String firs_Name, String last_Name, String email, String room_TYpe, int number_of_Guests,
			Date arrival_Date, Date departure_Date, int flight_Number, String special_Request) {
		super();
		Firs_Name = firs_Name;
		Last_Name = last_Name;
		Email = email;
		Room_TYpe = room_TYpe;
		Number_of_Guests = number_of_Guests;
		Arrival_Date = arrival_Date;
		Departure_Date = departure_Date;
		Flight_Number = flight_Number;
		Special_Request = special_Request;
	}
    
    public model()
    {
    }
}
