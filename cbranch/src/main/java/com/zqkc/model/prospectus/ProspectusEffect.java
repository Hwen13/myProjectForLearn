package com.zqkc.model.prospectus;

import java.io.Serializable;

public class ProspectusEffect implements Serializable{
	
	public ProspectusEffect() {}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPe_id() {
		return pe_id;
	}
	public void setPe_id(String pe_id) {
		this.pe_id = pe_id;
	}
	public String getPe_economy_effect() {
		return pe_economy_effect;
	}
	public void setPe_economy_effect(String pe_economy_effect) {
		this.pe_economy_effect = pe_economy_effect;
	}
	public String getPe_comm_effect() {
		return pe_comm_effect;
	}
	public void setPe_comm_effect(String pe_comm_effect) {
		this.pe_comm_effect = pe_comm_effect;
	}
	public String getPe_human_effect() {
		return pe_human_effect;
	}
	public void setPe_human_effect(String pe_human_effect) {
		this.pe_human_effect = pe_human_effect;
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
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * 
	 */
	private int id;
	/**
	 * 
	 */
	private String pe_id;
	/**
	 * 
	 */
	private String pe_economy_effect;
	/**
	 * 
	 */
	private String pe_comm_effect;
	/**
	 * 
	 */
	private String pe_human_effect;
	/**
	 * 
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

}
