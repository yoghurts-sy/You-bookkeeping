package com.yoghurt.back.pojo;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/*@Entity
@Table(name = "account")
@JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})*/
public class Account {

    private int id;
    private int record_type;
    private String category;
    private String subcategory;
    private String record_desc;
    private double record_value;

    @DateTimeFormat(pattern = "yyyy/MM/dd")
    private Date record_date;

    private String pay;
    private String userid;
    /*@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    int id;

    @Column(name = "record_type")
    int type;

    @Column(name = "category")
    String category;

    @Column(name="subcategory")
    String subCategory;

    @Column(name = "record_desc")
    String desc;

    @Column(name = "record_value")
    double value;

    @DateTimeFormat(pattern = "yyyy/MM/dd")
    @Column(name = "record_date")
    Date date;

    @Column(name = "pay")
    String pay;

    @Column(name = "userid")
    String userid;*/

    public Account(int id, int record_type, String category, String subcategory, String record_desc, double record_value, Date record_date, String pay, String userid) {
        this.id = id;
        this.record_type = record_type;
        this.category = category;
        this.subcategory = subcategory;
        this.record_desc = record_desc;
        this.record_value = record_value;
        this.record_date = record_date;
        this.pay = pay;
        this.userid = userid;
    }

    public Account() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRecord_type() {
        return record_type;
    }

    public void setRecord_type(int record_type) {
        this.record_type = record_type;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(String subcategory) {
        this.subcategory = subcategory;
    }

    public String getRecord_desc() {
        return record_desc;
    }

    public void setRecord_desc(String record_desc) {
        this.record_desc = record_desc;
    }

    public double getRecord_value() {
        return record_value;
    }

    public void setRecord_value(double record_value) {
        this.record_value = record_value;
    }

    public Date getRecord_date() {
        return record_date;
    }

    public void setRecord_date(Date record_date) {
        this.record_date = record_date;
    }

    public String getPay() {
        return pay;
    }

    public void setPay(String pay) {
        this.pay = pay;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", record_type=" + record_type +
                ", category='" + category + '\'' +
                ", subCategory='" + subcategory + '\'' +
                ", record_desc='" + record_desc + '\'' +
                ", record_value=" + record_value +
                ", record_date=" + record_date +
                ", pay='" + pay + '\'' +
                ", userid='" + userid + '\'' +
                '}';
    }
}
