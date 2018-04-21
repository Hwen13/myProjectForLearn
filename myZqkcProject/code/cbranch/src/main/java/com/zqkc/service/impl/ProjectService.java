package com.zqkc.service.impl;

import java.sql.SQLException;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zqkc.dao.IProjectDao;
import com.zqkc.model.Project;
import com.zqkc.service.IProjectService;

/**
 * 
 * @author hw 项目案例Service实现层
 *
 */
@Service
public class ProjectService implements IProjectService {

	private Logger log = Logger.getLogger(Logger.class);//写入日志
	
	@Autowired
	protected IProjectDao projectDao; //set注入方式将接口注入到实现类

	public void setProjectDao(IProjectDao projectDao) {
		this.projectDao = projectDao;
	}
	public IProjectDao getProjectDao() {
		return projectDao;
	}
	/**
	 * 添加项目案例Service层实现
	 */
	@Override
	public boolean doAddProject(Project project) throws Exception {
			
		if(project!=null){
					
			
			System.out.println("name:"+project.getName());
			System.out.println("path:"+project.getPath());
			System.out.println("title:"+project.getTitle());
			System.out.println("url:"+project.getUrl());
			System.out.println("remark:"+project.getRemark());
			System.out.println("power:"+project.getPower());
			System.out.println("isdel:"+project.getIsdel());
			System.out.println("type:"+project.getType());
			try {
				int n=projectDao.addProject(project);			
				return n>0?true:false;
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	

	/**
	 * 删除项目案例Service层实现
	 */
	@Override
	public boolean doDeleteProject(int id) throws Exception {
			if(id>0){
				try {
					int n=projectDao.deleteProject(id);
					return n>0?true:false;
				} catch (Exception e) {
					log.debug(e.toString());
					e.printStackTrace();
				}			
			}
		return false;
	}

	/**
	 * 修改项目案例Service层实现
	 */
	@Override
	public boolean doUpdateProject(Project project) throws Exception {
		
	if(project!=null){
		try {
			int n=projectDao.updateProject(project);
			return n>0?true:false;
		} catch (Exception e) {
			log.debug(e.toString());
			e.printStackTrace();
		}
	}
		return false;
	}
	/**
	 * 根据ID查找项目案例Service层实现
	 */
	@Override
	public Project doFindProjectById(int id) throws Exception {
		
		if(id>0){
			try {
				Project project =projectDao.findProjectById(id);
				if(project!=null){
					return project;
				}else{
					return null;
				}
				
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return null;
	}
	/**
	 * 查找所有项目案例Service层实现
	 */
	

	@Override
	public List<Project> doFindProjectAll() throws Exception {
		List<Project> listProject=null;
			try {
				 listProject=projectDao.findProjectAll();
				 if(!listProject.isEmpty()){
					 return listProject;
				 }			 
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
			
				
		return null;
	}
	/**
	 * 批量删除项目案例Service层
	 */
	@Override
	public boolean doDeleteProjectMass(String[] ids) throws SQLException {
		
		if(ids!=null){
		
			try {			
				int n=projectDao.deleteProjectMass(ids);
				return n>0?true:false;
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}
}
