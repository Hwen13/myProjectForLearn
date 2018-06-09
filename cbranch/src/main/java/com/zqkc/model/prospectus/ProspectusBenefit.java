package com.zqkc.model.prospectus;

import java.io.Serializable;

public class ProspectusBenefit implements Serializable{
	
	public ProspectusBenefit() {
		
	}
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * id
	 */
	private int id;
	/**
	 * pp_id
	 */
	private String pb_id;
	/**
	 * id
	 */
	private String pb_goods;
	/**
	 * id
	 */
	private String pb_labour;
	/**
	 * id
	 */
	private String pb_market;
	/**
	 * id
	 */
	private String pb_remark;
	/**
	 * pp_conclusion
	 */
	private String pb_remain;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPb_id() {
		return pb_id;
	}
	public void setPb_id(String pb_id) {
		this.pb_id = pb_id;
	}
	public String getPb_goods() {
		return pb_goods;
	}
	public void setPb_goods(String pb_goods) {
		this.pb_goods = pb_goods;
	}
	public String getPb_labour() {
		return pb_labour;
	}
	public void setPb_labour(String pb_labour) {
		this.pb_labour = pb_labour;
	}
	public String getPb_market() {
		return pb_market;
	}
	public void setPb_market(String pb_market) {
		this.pb_market = pb_market;
	}
	public String getPb_remark() {
		return pb_remark;
	}
	public void setPb_remark(String pb_remark) {
		this.pb_remark = pb_remark;
	}
	public String getPb_remain() {
		return pb_remain;
	}
	public void setPb_remain(String pb_remain) {
		this.pb_remain = pb_remain;
	}
	public byte getIsdel() {
		return isdel;
	}
	public void setIsdel(byte isdel) {
		this.isdel = isdel;
	}
	public byte getStatus() {
		return status;
	}
	public void setStatus(byte status) {
		this.status = status;
	}
	public byte getPower() {
		return power;
	}
	public void setPower(byte power) {
		this.power = power;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	/**
	 * isdel
	 */
	private byte isdel;
	/**
	 * status
	 */
	private byte status;
	/**
	 * power
	 */
	private byte power;

}
