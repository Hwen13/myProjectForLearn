package com.zqkc.model.prospectus;

import java.io.Serializable;

public class ProspectusPlan implements Serializable{

	
	public ProspectusPlan() {
		//构造函数
	}
	/**
	 * 序列化
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * id
	 */
	private int id;
	/**
	 * pp_id
	 */
	private String pp_id;
	/**
	 * id
	 */
	private String pp_title;
	/**
	 * id
	 */
	private String pp_planner;
	/**
	 * id
	 */
	private String pp_content;
	/**
	 * id
	 */
	private String pp_effect_id;
	/**
	 * pp_conclusion
	 */
	private String pp_conclusion;
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
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPp_id() {
		return pp_id;
	}
	public void setPp_id(String pp_id) {
		this.pp_id = pp_id;
	}
	public String getPp_title() {
		return pp_title;
	}
	public void setPp_title(String pp_title) {
		this.pp_title = pp_title;
	}
	public String getPp_planner() {
		return pp_planner;
	}
	public void setPp_planner(String pp_planner) {
		this.pp_planner = pp_planner;
	}
	public String getPp_content() {
		return pp_content;
	}
	public void setPp_content(String pp_content) {
		this.pp_content = pp_content;
	}
	public String getPp_effect_id() {
		return pp_effect_id;
	}
	public void setPp_effect_id(String pp_effect_id) {
		this.pp_effect_id = pp_effect_id;
	}
	public String getPp_conclusion() {
		return pp_conclusion;
	}
	public void setPp_conclusion(String pp_conclusion) {
		this.pp_conclusion = pp_conclusion;
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
	

}
