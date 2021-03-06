/**
 * 
 */
package com.zqkc.model;

/**
 * @author Administrator Model层 项目案例 封装对象
 *
 */
public class Project {

	/**
	 * 项目编号
	 */
	private int id;
	/**
	 * 项目名称
	 */
	private String name;
	/**
	 * 项目标题
	 */
	private String title;
	/**
	 * 项目类型
	 */
	private String type;
	/**
	 * 预留字段
	 */
	private String remark;
	/**
	 * 项目访问地址
	 */
	private String url;
	/**
	 * 项目图片
	 */
	private String path;
	/**
	 * 权重
	 */
	private int power;
	/**
	 * 是否删除
	 */
	private int isdel = 1;

	public Project() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
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

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
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
