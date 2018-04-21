/**
 * 
 */
package com.zqkc.model;

import org.springframework.stereotype.Component;

/**
 * @author Administrator Model层 轮播图封装对象
 *
 */
@Component("bannerfile")
public class Bannerfile {

	/**
	 * 文件编号
	 */
	private int id;
	/**
	 * 文件名
	 */
	private String filename;
	/**
	 * 文件路径
	 */
	private String path;
	/**
	 * 父编号
	 */
	private int pid;
	/**
	 * 是否删除
	 */
	private int isdel = 1;

	public Bannerfile() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public int getIsdel() {
		return isdel;
	}

	public void setIsdel(int isdel) {
		this.isdel = isdel;
	}

	@Override
	public String toString() {
		return "Bannerfile [id=" + id + ", filename=" + filename + ", path=" + path + ", pid=" + pid + ", isdel="
				+ isdel + "]";
	}

}
