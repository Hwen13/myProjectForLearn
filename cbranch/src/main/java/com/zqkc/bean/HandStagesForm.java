package com.zqkc.bean;

import java.io.Serializable;

import com.sun.istack.internal.NotNull;

public class HandStagesForm implements Serializable {

	/**
	 * 序列化
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * 手工单
	 */
	@NotNull
	private String handStages;
	/**
	 * 手工单id
	 */
	@NotNull
	private String handId;
	/**
	 * 手工单编码
	 */
	@NotNull
	private String handCode;
	/**
	 * 手工单排序
	 */
	@NotNull
	private String handDesc;
	/**
	 * 手工单日期
	 */
	@NotNull
	private String handDate;
	/**
	 * 手工单号码
	 */
	@NotNull
	private String handNum;
	/**
	 * 手工单名称
	 */
	@NotNull
	private String handName;
	public String getHandStages() {
		return handStages;
	}
	public void setHandStages(String handStages) {
		this.handStages = handStages;
	}
	public String getHandId() {
		return handId;
	}
	public void setHandId(String handId) {
		this.handId = handId;
	}
	public String getHandCode() {
		return handCode;
	}
	public void setHandCode(String handCode) {
		this.handCode = handCode;
	}
	public String getHandDesc() {
		return handDesc;
	}
	public void setHandDesc(String handDesc) {
		this.handDesc = handDesc;
	}
	public String getHandDate() {
		return handDate;
	}
	public void setHandDate(String handDate) {
		this.handDate = handDate;
	}
	public String getHandNum() {
		return handNum;
	}
	public void setHandNum(String handNum) {
		this.handNum = handNum;
	}
	public String getHandName() {
		return handName;
	}
	public void setHandName(String handName) {
		this.handName = handName;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}
