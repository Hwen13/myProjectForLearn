/**
 * 
 */
package com.zqkc.model;

import org.springframework.stereotype.Component;

/**
 * @author Administrator Model层 轮播 封装对象
 *
 */
@Component("banner")
public class Banner {

	/**
	 * 轮播编号
	 */
	private int id;
	/**
	 * 标题
	 */
	private String title;
	/**
	 * 轮播描述
	 */
	private String description;
	/**
	 * 预留字段
	 */
	private String remark;
	/**
	 * 权重
	 */
	private int power;
	/**
	 * 是否删除
	 */
	private int isdel = 1;

	public Banner() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public int getPower() {
		return power;
	}

	public void setPower(int power) {
		this.power = power;
	}

	public int getIsdel() {
		return isdel;
	}

	public void setIsdel(int isdel) {
		this.isdel = isdel;
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "Banner[id=" + id + ";title=" + title + ";description=" + description + ";power=" + power + ";isdel="
				+ isdel + "]";
	}

}
