package com.zqkc.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Component;

import com.zqkc.model.Project;

/**
 * 
 * @author hw 项目案例service层接口
 *
 */
@Component
public interface IProjectService {

	/**
	 * 添加项目案例处理
	 * 
	 * @param project
	 * @return
	 * @throws Exception
	 */
	public boolean doAddProject(Project project) throws Exception;

	/**
	 * 删除项目案例
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public boolean doDeleteProject(int id) throws Exception;

	/**
	 * 批量删除项目案例
	 * 
	 * @param ids
	 * @return
	 * @throws SQLException
	 */
	public boolean doDeleteProjectMass(String[] ids) throws SQLException;

	/**
	 * 更新项目案例
	 * 
	 * @param project
	 * @return
	 * @throws Exception
	 */
	public boolean doUpdateProject(Project project) throws Exception;

	/**
	 * 根据ID查找所有项目案例
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public Project doFindProjectById(int id) throws Exception;

	/**
	 * 查找所有的项目案例
	 * 
	 * @return
	 * @throws Exception
	 */
	public List<Project> doFindProjectAll() throws Exception;

	/**
	 * 统计项目案例服务层
	 */
	public int doGetProjectNum() throws Exception;
}
