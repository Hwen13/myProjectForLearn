/**
 * 
 */
package com.zqkc.model;

/**
 * @author Administrator Model层 服务 封装对象
 *
 */
public class Services {

	/**
	 * 服务编号
	 */
	private int id;
	/**
	 * 服务名称
	 */
	private String title;
	/**
	 * 服务介绍
	 */
	private String description;
	/**
	 * 预留字段
	 */
	private String remark;
	/**
	 * 连接
	 */
	private String url;
	/**
	 * 权重
	 */
	private int power;
	/**
	 * 是否删除
	 */
	private int isdel = 1;

	public Services() {

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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
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

}
