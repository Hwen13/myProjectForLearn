/**
 * 
 */
package com.zqkc.model;

import java.util.HashSet;
import java.util.Set;

/**
 * @author Administrator Model层 业务 封装对象
 *
 */
public class Business {

	/**
	 * 业务编号
	 */
	private int id;
	/**
	 * 业务名称
	 */
	private String title;
	/**
	 * 业务介绍
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

	private Set<Images> set = new HashSet<Images>(0);

	public Business() {

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

	public Set<Images> getSet() {
		return set;
	}

	public void setSet(Set<Images> set) {
		this.set = set;
	}

	@Override
	public String toString() {
		return "Business [id=" + id + ", title=" + title + ", description=" + description + ", remark=" + remark
				+ ", power=" + power + ", isdel=" + isdel + "]";
	}

}
