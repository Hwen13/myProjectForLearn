package com.zqkc.dao;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.zqkc.model.Project;

/**
 * 
 * @author hw 项目案例Dao层接口
 *
 */
@Repository
public interface IProjectDao {

	/**
	 * 添加项目案例
	 * 
	 * @param project
	 * @return
	 * @throws Exception
	 */
	public int addProject(Project project) throws SQLException;

	/**
	 * 删除项目案例
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	public int deleteProject(int id) throws SQLException;

	/**
	 * 批量删除项目案例
	 * 
	 * @param ids
	 * @return
	 * @throws SQLException
	 */
	public int deleteProjectMass(String[] ids) throws SQLException;

	/**
	 * 更新项目案例
	 * 
	 * @param project
	 * @return
	 * @throws SQLException
	 */
	public int updateProject(Project project) throws SQLException;

	/**
	 * 查找所有项目案例
	 * 
	 * @return
	 * @throws SQLException
	 */
	public List<Project> findProjectAll() throws SQLException;

	/**
	 * 根据ID查找项目案例
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	public Project findProjectById(int id) throws SQLException;

	/**
	 * 统计项目案例数量
	 * 
	 * @return
	 * @throws Exception
	 */
	public int getProjectNum() throws Exception;
}
