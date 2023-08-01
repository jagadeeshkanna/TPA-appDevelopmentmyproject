



package mini;

import java.sql.*;
//import java.util.Scanner;
//
//public class Java {
//    private static final String DB_URL = "jdbc:mysql://localhost:3306/mini";
//    private static final String DB_USER = "root";
//    private static final String DB_PASSWORD = "jaga@72004";
//
//    
//    private static Connection getConnection() throws ClassNotFoundException, SQLException {
//        Class.forName("com.mysql.cj.jdbc.Driver");
//        return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
//    }
//
//    
//    private static void addCustomer() {
//        try (Connection con = getConnection();
//             PreparedStatement pst = con.prepareStatement("INSERT INTO customer (name, email, phone_no, from_address, To_address, Date) VALUES (?, ?, ?, ?, ?, ?)")) {
//
//            Scanner sc = new Scanner(System.in);
//         
//                System.out.print("Enter the name: ");
//                String name = sc.nextLine();
//                System.out.print("Enter the email: ");
//                String email = sc.nextLine();
//                System.out.print("Enter the phone_no: ");
//                String phoneNo = sc.nextLine();
//                System.out.print("Enter the from_address: ");
//                String fromAddress = sc.nextLine();
//                System.out.print("Enter the To_Address: ");
//                String toAddress = sc.nextLine();
//                System.out.print("Enter the date: ");
//              
//              String date = sc.nextLine();
//               sc.nextLine(); // Consume the newline character
//
//               
//                pst.setString(1, name);
//                pst.setString(2, email);
//                pst.setString(3, phoneNo);
//                pst.setString(4, fromAddress);
//                pst.setString(5, toAddress);
//                pst.setString(6, date);
//                pst.executeUpdate();
//    
//
//            ResultSet rs = pst.executeQuery("SELECT * FROM customer");
//            while (rs.next()) {
//                System.out.println(rs.getString("name") + " " + rs.getString("email") + " " +
//            rs.getString("phone_no") + " " +rs.getString("from_address") + " " +
//           rs.getString("To_address") + " " + rs.getString("Date"));
//                
//            }
//
//        } catch (ClassNotFoundException | SQLException e) {
//            e.printStackTrace();
//        }
//    }
//
//  
//   
//  
//    private static void updateDeliveryStatus() {
//        try (Connection con = getConnection();
//             PreparedStatement pst = con.prepareStatement("INSERT INTO deliverstatus(pstatus,dtime) VALUES (?,?)")) {
//
//            Scanner sc = new Scanner(System.in);
//            System.out.print("Enter the new delivery status: ");
//            String pstatus = sc.nextLine();
//            System.out.print("Enter dtime: ");
//            String dtime = sc.nextLine();
//
//            pst.setString(1, pstatus);
//            pst.setString(2, dtime);
//            pst.executeUpdate();
//         
//            ResultSet rs = pst.executeQuery("SELECT * FROM deliverstatus");
//            while (rs.next()) {
//               System.out.println(rs.getString("sname") + " " + rs.getString("rname") + " " +
//            rs.getString("rnumber") + " " +rs.getString("raddress"));
//                
//            }
//
//        } catch (ClassNotFoundException | SQLException e) {
//            e.printStackTrace();
//        }
//    }
//    
//    private static void showDelivery() {
//        try (Connection con = getConnection();
//                PreparedStatement pst = con.prepareStatement("INSERT INTO delivery(sname,rname,rnumber,raddress) VALUES (?, ?, ?, ?)")) {
//
//                 Scanner sc = new Scanner(System.in);
//        
//
//
//                   System.out.print("Enter the sname: ");
//                   String sname = sc.nextLine();
//                   System.out.print("Enter the rname: ");
//                   String rname = sc.nextLine();
//                   System.out.print("Enter the rnumber: ");
//                   String rnumber = sc.nextLine();
//                   System.out.print("Enter the raddress: ");
//                   String raddress = sc.nextLine();
//                 
//                  sc.nextLine(); // Consume the newline character
//
//                  
//                   pst.setString(1, sname);
//                   pst.setString(2, rname);
//                   pst.setString(3, rnumber);
//                   pst.setString(4, raddress);
//                   pst.executeUpdate();
//           
//
//               ResultSet rs = pst.executeQuery("SELECT * FROM delivery");
//               while (rs.next()) {
//                   System.out.println(rs.getString("sname") + " " + rs.getString("rname") + " " +
//               rs.getString("rnumber") + " " +rs.getString("raddress"));
//                   
//               }
//
//           } catch (ClassNotFoundException | SQLException e) {
//               e.printStackTrace();
//           }
//          }
//
//    
//    private static void showPayment() {
//        try (Connection con = getConnection();
//                PreparedStatement pst = con.prepareStatement("INSERT INTO payment(bname,ptype,amount) VALUES (?, ?, ?)")) {
//
//               Scanner sc = new Scanner(System.in);
//          
//
//
//                   System.out.print("Enter the bname: ");
//                   String bname = sc.nextLine();
//                   System.out.print("Enter the ptype: ");
//                   String ptype = sc.nextLine();
//                   System.out.print("Enter the amount: ");
//                   int amount = sc.nextInt();
//                 
//                  sc.nextLine(); // Consume the newline character
//
//                  
//                   pst.setString(1, bname);
//                   pst.setString(2, ptype);
//                  pst.setInt(3, amount);
//                   sc.nextLine();
//                   pst.executeUpdate();
//       
//
//               ResultSet rs = pst.executeQuery("SELECT * FROM payment");
//               while (rs.next()) {
//                   System.out.println(rs.getString("bname") + " " + rs.getString("ptype") + " " +
//               rs.getInt("amount"));
//                   
//               }
//
//           } catch (ClassNotFoundException | SQLException e) {
//               e.printStackTrace();
//           }
//          }
//
//    
//    private static void showProduct() {
//        try (Connection con = getConnection();
//                PreparedStatement pst = con.prepareStatement("INSERT INTO product(pweight) VALUES (?)")) {
//
//               Scanner sc = new Scanner(System.in);
//          
//
//                   System.out.print("Enter the Productweight: ");
//                   int pweight = sc.nextInt();
//                 sc.nextLine();   // Consume the newline character
//
//                  
//                   pst.setInt(1,pweight);
//                   pst.executeUpdate();
//         
//               ResultSet rs = pst.executeQuery("SELECT * FROM product");	
//               while (rs.next()) {
//                   System.out.println(rs.getInt("pweight"));
//                   
//               }
//
//           } catch (ClassNotFoundException | SQLException e) {
//               e.printStackTrace();
//           }
//          }
//
//    
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        System.out.println("Welcome to the Courier Management System!");
//        System.out.println();
//        System.out.println();
//        while (true) {
//            System.out.println("chooose 1-5,6 Exit");
//        	System.out.print("Enter your choice: ");
//            
//            int choice = sc.nextInt();
//            sc.nextLine(); 
//
//            switch (choice) {
//                case 1:
//                    addCustomer();
//                    break;
//                case 2:
//                	//showDeliveryStatus();
//               updateDeliveryStatus();
//                	break;
//                case 3:
//                	showDelivery();
//                	break;
//                case 4:
//                	showPayment();
//                	break;
//                case 5:
//                	showProduct();
//                	break;
//                case 6:
//                	System.out.println("Exiting the application.");
//                	System.out.println("---- THANKS FOR VISITING ----");
//                    return;
//                default:
//                    System.out.println("Invalid choice. Please try again.");
//            }
//        }
//    }
//}
//
//
//
//
//
//
//
//
import java.util.Scanner;

//
//
//
//
//
//import java.util.Scanner;
//interface Customer {
//    void setName(String name);
//    void setEmail(String email);
//    void setPhoneNo(String phoneNo);
//    void setFromAddress(String fromAddress);
//    void setToAddress(String toAddress);
//    void setDate(String date);
//
//    String getName();
//    String getEmail();
//    String getPhoneNo();
//    String getFromAddress();
//    String getToAddress();
//    String getDate();
//}
//
//interface Delivery {
//    void setStatus(String status);
//    void setDeliveryTime(String deliveryTime);
//
//    String getStatus();
//    String getDeliveryTime();
//}
//
//interface Payment {
//    void setBusinessName(String businessName);
//    void setPaymentType(String paymentType);
//    void setAmount(int amount);
//
//    String getBusinessName();
//    String getPaymentType();
//    int getAmount();
//}
//
//interface Product {
//    void setWeight(int weight);
//
//    int getWeight();
//}
//
//class ConcreteCustomer implements Customer {
//    private String name;
//    private String email;
//    private String phoneNo;
//    private String fromAddress;
//    private String toAddress;
//    private String date;
//
//    @Override
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    @Override
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    @Override
//    public void setPhoneNo(String phoneNo) {
//        this.phoneNo = phoneNo;
//    }
//
//    @Override
//    public void setFromAddress(String fromAddress) {
//        this.fromAddress = fromAddress;
//    }
//
//    @Override
//    public void setToAddress(String toAddress) {
//        this.toAddress = toAddress;
//    }
//
//    @Override
//    public void setDate(String date) {
//        this.date = date;
//    }
//
//    @Override
//    public String getName() {
//        return name;
//    }
//
//    @Override
//    public String getEmail() {
//        return email;
//    }
//
//    @Override
//    public String getPhoneNo() {
//        return phoneNo;
//    }
//
//    @Override
//    public String getFromAddress() {
//        return fromAddress;
//    }
//
//    @Override
//    public String getToAddress() {
//        return toAddress;
//    }
//
//    @Override
//    public String getDate() {
//        return date;
//    }
//}
//
//class ConcreteDelivery implements Delivery {
//    private String status;
//    private String deliveryTime;
//
//    @Override
//    public void setStatus(String status) {
//        this.status = status;
//    }
//
//    @Override
//    public void setDeliveryTime(String deliveryTime) {
//        this.deliveryTime = deliveryTime;
//    }
//
//    @Override
//    public String getStatus() {
//        return status;
//    }
//
//    @Override
//    public String getDeliveryTime() {
//        return deliveryTime;
//    }
//}
//
//class ConcretePayment implements Payment {
//    private String businessName;
//    private String paymentType;
//    private int amount;
//
//    @Override
//    public void setBusinessName(String businessName) {
//        this.businessName = businessName;
//    }
//
//    @Override
//    public void setPaymentType(String paymentType) {
//        this.paymentType = paymentType;
//    }
//
//    @Override
//    public void setAmount(int amount) {
//        this.amount = amount;
//    }
//
//    @Override
//    public String getBusinessName() {
//        return businessName;
//    }
//
//    @Override
//    public String getPaymentType() {
//        return paymentType;
//    }
//
//    @Override
//    public int getAmount() {
//        return amount;
//    }
//}
//
//class ConcreteProduct implements Product {
//    private int weight;
//
//    @Override
//    public void setWeight(int weight) {
//        this.weight = weight;
//    }
//
//    @Override
//    public int getWeight() {
//        return weight;
//    }
//}
//
//public class Java {
//    private static final Scanner sc = new Scanner(System.in);
//    private static final Customer customer = new ConcreteCustomer();
//    private static final Delivery delivery = new ConcreteDelivery();
//    private static final Payment payment = new ConcretePayment();
//    private static final Product product = new ConcreteProduct();
//
//    // Helper method to read input from the user
//    private static String readInput(String message) {
//        System.out.print(message);
//        return sc.nextLine();
//    }
//
//    private static void addCustomer() {
//        customer.setName(readInput("Enter the name: "));
//        customer.setEmail(readInput("Enter the email: "));
//        customer.setPhoneNo(readInput("Enter the phone number: "));
//        customer.setFromAddress(readInput("Enter the from address: "));
//        customer.setToAddress(readInput("Enter the to address: "));
//        customer.setDate(readInput("Enter the date: "));
//
//        // Implement the code to add the customer to the database
//        // ...
//
//        System.out.println("Customer added successfully!");
//    }
//
//    private static void updateDeliveryStatus() {
//        delivery.setStatus(readInput("Enter the new delivery status: "));
//        delivery.setDeliveryTime(readInput("Enter the delivery time: "));
//
//        // Implement the code to update the delivery status in the database
//        // ...
//        try (Connection con = getConnection();
//              PreparedStatement pst = con.prepareStatement("INSERT INTO deliverstatus(pstatus,dtime) VALUES (?,?)")) {
// 
//             Scanner sc = new Scanner(System.in);
//             System.out.print("Enter the new delivery status: ");
//             String pstatus = sc.nextLine();
//             System.out.print("Enter dtime: ");
//             String dtime = sc.nextLine();
// 
//             pst.setString(1, pstatus);
//             pst.setString(2, dtime);
//             pst.executeUpdate();
//          
//             ResultSet rs = pst.executeQuery("SELECT * FROM deliverstatus");
//             while (rs.next()) {
//                System.out.println(rs.getString("sname") + " " + rs.getString("rname") + " " +
//             rs.getString("rnumber") + " " +rs.getString("raddress"));
//                 
//             }
// 
//         } catch (ClassNotFoundException | SQLException e) {
//             e.printStackTrace();
//         }
//
//        System.out.println("Delivery status updated successfully!");
//    }
//
//    private static void showDelivery() {
//        // Implement the code to show delivery details
//        // ...
//        try (Connection con = getConnection();
//              PreparedStatement pst = con.prepareStatement("INSERT INTO delivery(sname,rname,rnumber,raddress) VALUES (?, ?, ?, ?)")) {
//
//               Scanner sc = new Scanner(System.in);
//      
//
//
//                 System.out.print("Enter the sname: ");
//                 String sname = sc.nextLine();
//                 System.out.print("Enter the rname: ");
//                 String rname = sc.nextLine();
//                 System.out.print("Enter the rnumber: ");
//                 String rnumber = sc.nextLine();
//                 System.out.print("Enter the raddress: ");
//                 String raddress = sc.nextLine();
//               
//                sc.nextLine(); // Consume the newline character
//
//                
//                 pst.setString(1, sname);
//                 pst.setString(2, rname);
//                 pst.setString(3, rnumber);
//                 pst.setString(4, raddress);
//                 pst.executeUpdate();
//         
//
//             ResultSet rs = pst.executeQuery("SELECT * FROM delivery");
//             while (rs.next()) {
//                 System.out.println(rs.getString("sname") + " " + rs.getString("rname") + " " +
//             rs.getString("rnumber") + " " +rs.getString("raddress"));
//                 
//             }
//
//         } catch (ClassNotFoundException | SQLException e) {
//             e.printStackTrace();
//         }
//
//        System.out.println("Delivery details displayed successfully!");
//    }
//
//    private static void showPayment() {
//        payment.setBusinessName(readInput("Enter the business name: "));
//        payment.setPaymentType(readInput("Enter the payment type: "));
//        payment.setAmount(Integer.parseInt(readInput("Enter the amount: ")));
//
//        // Implement the code to add the payment details to the database
//        // ...
//        try (Connection con = getConnection();
//              PreparedStatement pst = con.prepareStatement("INSERT INTO payment(bname,ptype,amount) VALUES (?, ?, ?)")) {
//
//             Scanner sc = new Scanner(System.in);
//        
//
//
//                 System.out.print("Enter the bname: ");
//                 String bname = sc.nextLine();
//                 System.out.print("Enter the ptype: ");
//                 String ptype = sc.nextLine();
//                 System.out.print("Enter the amount: ");
//                 int amount = sc.nextInt();
//               
//                sc.nextLine(); // Consume the newline character
//
//                
//                 pst.setString(1, bname);
//                 pst.setString(2, ptype);
//                pst.setInt(3, amount);
//                 sc.nextLine();
//                 pst.executeUpdate();
//     
//
//             ResultSet rs = pst.executeQuery("SELECT * FROM payment");
//             while (rs.next()) {
//                 System.out.println(rs.getString("bname") + " " + rs.getString("ptype") + " " +
//             rs.getInt("amount"));
//                 
//             }
//
//         } catch (ClassNotFoundException | SQLException e) {
//             e.printStackTrace();
//         }
//
//        System.out.println("Payment details added successfully!");
//    }
//
//    private static void showProduct() {
//        product.setWeight(Integer.parseInt(readInput("Enter the product weight: ")));
//
//        // Implement the code to add the product details to the database
//        // ...
//        try (Connection con = getConnection();
//              PreparedStatement pst = con.prepareStatement("INSERT INTO product(pweight) VALUES (?)")) {
//
//             Scanner sc = new Scanner(System.in);
//        
//
//                 System.out.print("Enter the Productweight: ");
//                 int pweight = sc.nextInt();
//               sc.nextLine();   // Consume the newline character
//
//                
//                 pst.setInt(1,pweight);
//                 pst.executeUpdate();
//       
//             ResultSet rs = pst.executeQuery("SELECT * FROM product");	
//             while (rs.next()) {
//                 System.out.println(rs.getInt("pweight"));
//                 
//             }
//
//         } catch (ClassNotFoundException | SQLException e) {
//             e.printStackTrace();
//         }
//
//        System.out.println("Product details added successfully!");
//    }
//
//    public static void main(String[] args) {
//        System.out.println("Welcome to the Courier Management System!");
//        System.out.println();
//
//        while (true) {
//            System.out.println("Choose an option:");
//            System.out.println("1. Add Customer");
//            System.out.println("2. Update Delivery Status");
//            System.out.println("3. Show Delivery");
//            System.out.println("4. Show Payment");
//            System.out.println("5. Show Product");
//            System.out.println("6. Exit");
//            System.out.print("Enter your choice: ");
//
//            int choice = sc.nextInt();
//            sc.nextLine();
//
//            switch (choice) {
//                case 1:
//                    addCustomer();
//                    break;
//                case 2:
//                    updateDeliveryStatus();
//                    break;
//                case 3:
//                    showDelivery();
//                    break;
//                case 4:
//                    showPayment();
//                    break;
//                case 5:
//                    showProduct();
//                    break;
//                case 6:
//                    System.out.println("Exiting the application.");
//                    System.out.println("---- THANKS FOR VISITING ----");
//                    return;
//                default:
//                    System.out.println("Invalid choice. Please try again.");
//            }
//        }
//    }
//}




//import java.sql.*;
//
//interface Customer {
//    void setName(String name);
//    void setEmail(String email);
//    void setPhoneNo(String phoneNo);
//    void setFromAddress(String fromAddress);
//    void setToAddress(String toAddress);
//    void setDate(String date);
//
//    String getName();
//    String getEmail();
//    String getPhoneNo();
//    String getFromAddress();
//    String getToAddress();
//    String getDate();
//}
//
//interface Delivery {
//    void setStatus(String status);
//    void setDeliveryTime(String deliveryTime);
//
//    String getStatus();
//    String getDeliveryTime();
//}
//
//interface Payment {
//    void setBusinessName(String businessName);
//    void setPaymentType(String paymentType);
//    void setAmount(int amount);
//
//    String getBusinessName();
//    String getPaymentType();
//    int getAmount();
//}
//
//interface Product {
//    void setWeight(int weight);
//
//    int getWeight();
//}
//
//class ConcreteCustomer implements Customer {
//    // ... (same as before)
//	  private String name;
//    private String email;
//    private String phoneNo;
//    private String fromAddress;
//    private String toAddress;
//    private String date;
//
//    @Override
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    @Override
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    @Override
//    public void setPhoneNo(String phoneNo) {
//        this.phoneNo = phoneNo;
//    }
//
//    @Override
//    public void setFromAddress(String fromAddress) {
//        this.fromAddress = fromAddress;
//    }
//
//    @Override
//    public void setToAddress(String toAddress) {
//        this.toAddress = toAddress;
//    }
//
//    @Override
//    public void setDate(String date) {
//        this.date = date;
//    }
//
//    @Override
//    public String getName() {
//        return name;
//    }
//
//    @Override
//    public String getEmail() {
//        return email;
//    }
//
//    @Override
//    public String getPhoneNo() {
//        return phoneNo;
//    }
//
//    @Override
//    public String getFromAddress() {
//        return fromAddress;
//    }
//
//    @Override
//    public String getToAddress() {
//        return toAddress;
//    }
//
//    @Override
//    public String getDate() {
//        return date;
//    }
//
//	
//}
//
//class ConcreteDelivery implements Delivery {
//    // ... (same as before)
//	   private String status;
//	    private String deliveryTime;
//	
//	    @Override
//	    public void setStatus(String status) {
//	        this.status = status;
//	    }
//	
//	    @Override
//	    public void setDeliveryTime(String deliveryTime) {
//	        this.deliveryTime = deliveryTime;
//	    }
//	
//	    @Override
//	    public String getStatus() {
//	        return status;
//	    }
//	
//	    @Override
//	    public String getDeliveryTime() {
//	        return deliveryTime;
//	    }
//	}
//	
//	class ConcretePayment implements Payment {
//	    private String businessName;
//	    private String paymentType;
//	    private int amount;
//	
//	    @Override
//	    public void setBusinessName(String businessName) {
//	        this.businessName = businessName;
//	    }
//	
//	    @Override
//	    public void setPaymentType(String paymentType) {
//	        this.paymentType = paymentType;
//	    }
//	
//	    @Override
//	    public void setAmount(int amount) {
//	        this.amount = amount;
//	    }
//	
//	    @Override
//	    public String getBusinessName() {
//	        return businessName;
//	    }
//	
//	    @Override
//	    public String getPaymentType() {
//	        return paymentType;
//	    }
//	
//	    @Override
//	    public int getAmount() {
//	        return amount;
//	    }
//}
//
//
//class ConcreteProduct implements Product {
//    // ... (same as before)
//	   private int weight;
//	   
//	       @Override
//	       public void setWeight(int weight) {
//	           this.weight = weight;
//	       }
//	   
//	       @Override
//	       public int getWeight() {
//	           return weight;
//	       }
//	   
//}
//
//class DatabaseManager {
//    private static final String DB_URL = "jdbc:mysql://localhost:3306/mini";
//    private static final String DB_USER = "root";
//    private static final String DB_PASSWORD = "jaga@72004";
//
//    public static Connection getConnection() throws ClassNotFoundException, SQLException {
//        Class.forName("com.mysql.cj.jdbc.Driver");
//        return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
//    }
//
//    public static void addCustomer(Customer customer) {
//        // Implement the code to add the customer to the database
//    	
//        try (Connection con = getConnection();
//             PreparedStatement pst = con.prepareStatement("INSERT INTO customer (name, email, phone_no, from_address, To_address, Date) VALUES (?, ?, ?, ?, ?, ?)")) {
//
//            pst.setString(1, customer.getName());
//            pst.setString(2, customer.getEmail());
//            pst.setString(3, customer.getPhoneNo());
//            pst.setString(4, customer.getFromAddress());
//            pst.setString(5, customer.getToAddress());
//            pst.setString(6, customer.getDate());
//
//            pst.executeUpdate();
//
//            System.out.println("Customer added successfully!");
//        } catch (ClassNotFoundException | SQLException e) {
//            e.printStackTrace();
//        }
//    }
//
//    public static void updateDeliveryStatus(Delivery delivery) {
//        // Implement the code to update the delivery status in the database
//    	
//        try (Connection con = getConnection();
//             PreparedStatement pst = con.prepareStatement("INSERT INTO deliverstatus (pstatus, dtime) VALUES (?, ?)")) {
//
//            pst.setString(1, delivery.getStatus());
//            pst.setString(2, delivery.getDeliveryTime());
//
//            pst.executeUpdate();
//
//            System.out.println("Delivery status updated successfully!");
//        } catch (ClassNotFoundException | SQLException e) {
//            e.printStackTrace();
//        }
//    }
//
//    // Add other methods to handle the database operations for Payment and Product
//    // ...
//    
//    
//}
//
//public class Java {
//    private static final Scanner sc = new Scanner(System.in);
//
//    // Helper method to read input from the user
//
//    private static String readInput(String message) {
//        System.out.print(message);
//        return sc.nextLine();
//    }
//
//    private static void addCustomer() {
//        ConcreteCustomer customer = new ConcreteCustomer();
//
//        customer.setName(readInput("Enter the name: "));
//        customer.setEmail(readInput("Enter the email: "));
//        customer.setPhoneNo(readInput("Enter the phone number: "));
//        customer.setFromAddress(readInput("Enter the from address: "));
//        customer.setToAddress(readInput("Enter the to address: "));
//        customer.setDate(readInput("Enter the date: "));
//
//        DatabaseManager.addCustomer(customer);
//        
//    }
//
//    private static void updateDeliveryStatus() {
//        ConcreteDelivery delivery = new ConcreteDelivery();
//
//        delivery.setStatus(readInput("Enter the new delivery status: "));
//        delivery.setDeliveryTime(readInput("Enter the delivery time: "));
//
//        DatabaseManager.updateDeliveryStatus(delivery);
//    }
//
//    // Add other methods for handling Payment and Product
//    // ...
//    
//    private static void showProduct() {
//    	
//	product.setWeight(Integer.parseInt(readInput("Enter the product weight: ")));
//
//      // Implement the code to add the product details to the database
//      // ...
//      try (Connection con = getConnection();
//           PreparedStatement pst = con.prepareStatement("INSERT INTO product(pweight) VALUES (?)")) {
//
//           Scanner sc = new Scanner(System.in);
//      
//
//               System.out.print("Enter the Productweight: ");        
//               int pweight = sc.nextInt();
//             sc.nextLine();   // Consume the newline character
//
//              
//               pst.setInt(1,pweight);
//               pst.executeUpdate();
//     
//           ResultSet rs = pst.executeQuery("SELECT * FROM product");	
//           while (rs.next()) {
//               System.out.println(rs.getInt("pweight"));
//               
//           }
//
//       } catch (ClassNotFoundException | SQLException e) {
//           e.printStackTrace();
//       }
//
//      System.out.println("Product details added successfully!");
//  }
//
//    private static void showPayment() {
//      payment.setBusinessName(readInput("Enter the business name: "));
//      payment.setPaymentType(readInput("Enter the payment type: "));
//      payment.setAmount(Integer.parseInt(readInput("Enter the amount: ")));
////
////      // Implement the code to add the payment details to the database
////      // ...
////      try (Connection con = getConnection();
////            PreparedStatement pst = con.prepareStatement("INSERT INTO payment(bname,ptype,amount) VALUES (?, ?, ?)")) {
////
////           Scanner sc = new Scanner(System.in);
////      
////
////
////               System.out.print("Enter the bname: ");
////               String bname = sc.nextLine();
////               System.out.print("Enter the ptype: ");
////               String ptype = sc.nextLine();
////               System.out.print("Enter the amount: ");
////               int amount = sc.nextInt();
////             
////              sc.nextLine(); // Consume the newline character
////
////              
////               pst.setString(1, bname);
////               pst.setString(2, ptype);
////              pst.setInt(3, amount);
////               sc.nextLine();
////               pst.executeUpdate();
////   
//
//           ResultSet rs = pst.executeQuery("SELECT * FROM payment");      
//           while (rs.next()) {
//               System.out.println(rs.getString("bname") + " " + rs.getString("ptype") + " " +
//           rs.getInt("amount"));
//               
//           }
//
//       } catch (ClassNotFoundException | SQLException e) {
//           e.printStackTrace();
//       }
//
//      System.out.println("Payment details added successfully!");
//  }
//
//    
//    
//    
//
//    public static void main(String[] args) {
//        System.out.println("Welcome to the Courier Management System!");
//        System.out.println();
//
//        while (true) {
//            System.out.println("Choose an option:");
//            System.out.println("1. Add Customer");
//            System.out.println("2. Delivery Status");
//            System.out.println("3. Show Delivery");
//            System.out.println("4. Show Payment");
//            System.out.println("5. Show Product");
//            System.out.println("6. Exit");
//            System.out.print("Enter your choice: ");
//
//            int choice = sc.nextInt();
//            sc.nextLine();
//
//            switch (choice) {
//                case 1:
//                    addCustomer();
//                    break;
//                case 2:
//                    updateDeliveryStatus();
//                    break;
//                case 3:
//                	
//                	break;
//                case 6:
//                    System.out.println("Exiting the application.");
//                    System.out.println("---- THANKS FOR VISITING ----");
//                    return;
//                default:
//                    System.out.println("Invalid choice. Please try again.");
//            }
//        }
//    }
//}
//
//


import java.sql.*;
import java.util.Scanner;

interface Customer {
    void setName(String name);
    void setEmail(String email);
    void setPhoneNo(String phoneNo);
    void setFromAddress(String fromAddress);
    void setToAddress(String toAddress);
    void setDate(String date);

    String getName();
    String getEmail();
    String getPhoneNo();
    String getFromAddress();
    String getToAddress();
    String getDate();
}

interface Delivery {
    void setStatus(String status);
    void setDeliveryTime(String deliveryTime);

    String getStatus();
    String getDeliveryTime();
}


interface Payment {
    void setBusinessName(String businessName);
    void setPaymentType(String paymentType);
    void setAmount(String Amount);

    String getBusinessName();
    String getPaymentType();
    String getAmount();
}

interface Product {
    void setPweight(String pweight);
    String getPweight();
}

class ConcreteCustomer implements Customer {
    private String name;
    private String email;
    private String phoneNo;
    private String fromAddress;
    private String toAddress;
    private String date;

    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    @Override
    public void setFromAddress(String fromAddress) {
        this.fromAddress = fromAddress;
    }

    @Override
    public void setToAddress(String toAddress) {
        this.toAddress = toAddress;
    }

    @Override
    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getEmail() {
        return email;
    }

    @Override
    public String getPhoneNo() {
        return phoneNo;
    }

    @Override
    public String getFromAddress() {
        return fromAddress;
    }

    @Override
    public String getToAddress() {
        return toAddress;
    }

    @Override
    public String getDate() {
        return date;
    }
}

class ConcreteDelivery implements Delivery {
    private String status;
    private String deliveryTime;

    @Override
    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public void setDeliveryTime(String deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    @Override
    public String getStatus() {
        return status;
    }

    @Override
    public String getDeliveryTime() {
        return deliveryTime;
    }
}

class ConcretePayment implements Payment {
    private String businessName;
    private String paymentType;
    private String amount;
   // private int pid;
    @Override
    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    @Override
    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    @Override
    public void setAmount(String amount) {
        this.amount = amount;
    }

    @Override
    public String getBusinessName() {
        return businessName;
    }

    @Override
    public String getPaymentType() {
        return paymentType;
    }

    @Override
    public String getAmount() {
        return amount;
    }
}

class ConcreteProduct implements Product {
    private String pweight;

    @Override
    public void setPweight(String pweight) {
        this.pweight = pweight;
    }

    @Override
    public String getPweight() {
        return pweight;
    }
//    @Override
//    public String getPid() {
//        return pid;
//    }
}

class DatabaseManager {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/mini";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "jaga@72004";
	//private static mini.Product pweight;
  //  private Product pweight;

    public static Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
    }

    public static void addCustomer(Customer customer) {
        try (Connection con = getConnection();
             PreparedStatement pst = con.prepareStatement("INSERT INTO customer (name, email, phone_no, from_address, To_address, Date) VALUES (?, ?, ?, ?, ?, ?)")) {

            pst.setString(1, customer.getName());
            pst.setString(2, customer.getEmail());
            pst.setString(3, customer.getPhoneNo());
            pst.setString(4, customer.getFromAddress());
            pst.setString(5, customer.getToAddress());
            pst.setString(6, customer.getDate());

            pst.executeUpdate();

            ResultSet rs = pst.executeQuery("SELECT * FROM customer");
            while (rs.next()) {
            	System.out.println(rs.getString("name") + " " + rs.getString("email") + " " +
            			rs.getString("phone_no")+ " " + rs.getString("from_address") + " " + rs.getString("To_address")+" "+rs.getString("Date"));
            	
            System.out.println("Customer added successfully!");
            
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }

    public static void updateDeliveryStatus(Delivery delivery) {
        try (Connection con = getConnection();
             PreparedStatement pst = con.prepareStatement("INSERT INTO deliverstatus (pstatus, dtime) VALUES (?, ?)")) {

            pst.setString(1, delivery.getStatus());
            pst.setString(2, delivery.getDeliveryTime());

            pst.executeUpdate();

            System.out.println("Delivery status updated successfully!");
            
            ResultSet rs = pst.executeQuery("SELECT * FROM deliverstatus");
            while (rs.next()) {
                System.out.println(rs.getString("pstatus") + " " + rs.getString("dtime"));
                
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }

    // Implement other methods to handle database operations for Payment and Product
    // ...
    
    private static void showPayment(Payment payment){

      // Implement the code to add the payment details to the database
      // ...
      try (Connection con = getConnection();
            PreparedStatement pst = con.prepareStatement("INSERT INTO payment(bname,ptype,amount) VALUES (?, ?, ?)")) {

      //     Scanner sc = new Scanner(System.in);
      
             pst.setString(1,payment.getBusinessName());
             pst.setString(2,payment.getPaymentType());
             pst.setString(3,payment.getAmount());

//               System.out.print("Enter the bname: ");
//               String bname = sc.nextLine();
//               System.out.print("Enter the ptype: ");
//               String ptype = sc.nextLine();
//               System.out.print("Enter the amount: ");
//               int amount = sc.nextInt();
             
           //   sc.nextLine(); // Consume the newline character

//              
//               pst.setString(1, bname);
//               pst.setString(2, ptype);
//              pst.setInt(3, amount);
//               sc.nextLine();
//               pst.executeUpdate();
//   

           ResultSet rs = pst.executeQuery("SELECT * FROM payment");
           while (rs.next()) {
               System.out.println(rs.getString("bname") + " " + rs.getString("ptype") + " " +
           rs.getInt("amount"));
               
           }

       } catch (ClassNotFoundException | SQLException e) {
           e.printStackTrace();
       }

}

//    private static void Product(Product product) {
//      try (Connection con = getConnection();
//              PreparedStatement pst = con.prepareStatement("INSERT INTO product(pweight) VALUES (?)")) {
//              pst.setString(1,pweight.getPweight());   
//                 pst.executeUpdate();
//       
//             ResultSet rs = pst.executeQuery("SELECT * FROM product");	
//             while (rs.next()) {
//                 System.out.println(rs.getString("pweight"));
//                 
//             }
//
//         } catch (ClassNotFoundException | SQLException e) {
//             e.printStackTrace();
//         }
//        }
    
    public static void addProduct(Product product) {
        try (Connection con = getConnection();
             PreparedStatement pst = con.prepareStatement("INSERT INTO product(pweight) VALUES (?)")) {

            pst.setString(1, product.getPweight());
            pst.executeUpdate();
        
            System.out.println("Product details added successfully!");
            ResultSet rs = pst.executeQuery("SELECT * FROM product");
         
            while (rs.next()) {
                System.out.println(rs.getString("pweight"));
                
            }
            
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }

public class Java {
    private static final Scanner sc = new Scanner(System.in);

    private static String readInput(String message) {
        System.out.print(message);
        return sc.nextLine();
    }

    private static void addCustomer() {
        Customer customer = new ConcreteCustomer();

        customer.setName(readInput("Enter the name: "));
        customer.setEmail(readInput("Enter the email: "));
        customer.setPhoneNo(readInput("Enter the phone number: "));
        customer.setFromAddress(readInput("Enter the from address: "));
        customer.setToAddress(readInput("Enter the to address: "));
        customer.setDate(readInput("Enter the date: "));

        DatabaseManager.addCustomer(customer);
    }

    private static void updateDeliveryStatus() {
        Delivery delivery = new ConcreteDelivery();

        delivery.setStatus(readInput("Enter the new delivery status: "));
        delivery.setDeliveryTime(readInput("Enter the delivery time: "));

        DatabaseManager.updateDeliveryStatus(delivery);
    }

    // Implement other methods for handling Payment and Product
    // ...
    
    private static void Payment() {
        Payment payment = new ConcretePayment();

        payment.setBusinessName(readInput("Enter the new bankname: "));
        payment.setPaymentType(readInput("Enter the paymenttype: "));
        payment.setAmount(readInput("Enter the amount: "));
      
        DatabaseManager.showPayment(payment);
    }
    
//    private static void Product() {
//        Product product = new ConcreteProduct();
//
//        product.setPweight(readInput("Enter the new productWeight: "));
//      
//        DatabaseManager.Product(product);
//    }
   

        private static void addProduct() {
            Product product = new ConcreteProduct();

            product.setPweight(readInput("Enter the product weight: "));

            DatabaseManager.addProduct(product);
        }

    public static void main(String[] args) {
        System.out.println("Welcome to the Courier Management System!");
        System.out.println();

        while (true) {
            System.out.println("Choose an option:");
            System.out.println("1. Add Customer");
            System.out.println("2. Add Delivery Status");
            System.out.println("3. 	Add Payment");
            System.out.println("4. Add Product");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");

            int choice = sc.nextInt();
            sc.nextLine(); // Consume the newline character

            switch (choice) {
                case 1:
                    addCustomer();
                    break;
                case 2:
                    updateDeliveryStatus();
                    break;
                    
                case 3:
                    // Implement method to show delivery details
                	Payment();
                    break;
                case 4:
                    // Implement method to show payment details
                	addProduct();
                    break;
                case 5:
                    System.out.println("Exiting the application.");
                    System.out.println("---- THANKS FOR VISITING ----");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
}



















