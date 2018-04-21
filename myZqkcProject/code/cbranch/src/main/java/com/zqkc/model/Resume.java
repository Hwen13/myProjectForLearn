package com.zqkc.model;
/**
 * 
 * @author saddy
 *简历表
 */
public class Resume {
    /**
     * 应聘编号
     */
	private int id;
	  /**
     * 应聘职位
     */
	private String position;
	  /**
     * 招聘编号
     */  
	private int rid;
	  /**
     * 简历路径
     */
    private String path;
	/**
	 * 创建时间
	 */
	private String createtime;
	/**
	 * 是否删除
	 */
	private int isdel;
	/**
	 * 状态
	 */
	private int status;
	/**
	 * 构造函数
	 */
	public Resume() {
		super();
	}
	/**
	 *有参构造
	 */
	public Resume(int id, String position, int rid, String path,
			String createtime, int isdel, int status) {
		super();
		this.id = id;
		this.position = position;
		this.rid = rid;
		this.path = path;
		this.createtime = createtime;
		this.isdel = isdel;
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public int getRid() {
		return rid;
	}
	public void setRid(int rid) {
		this.rid = rid;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public String getCreatetime() {
		return createtime;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public int getIsdel() {
		return isdel;
	}
	public void setIsdel(int isdel) {
		this.isdel = isdel;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Resume [id=" + id + ", position=" + position + ", rid=" + rid
				+ ", path=" + path + ", createtime=" + createtime + ", isdel="
				+ isdel + ", status=" + status + "]";
	}
	
}
