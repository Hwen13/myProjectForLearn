package com.zqkc.dao;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.zqkc.model.Recruit;

/**
 * 持久层招募
 * 
 * @author saddy
 *
 */
@Repository
public interface IRecruitDao {
	/**
	 * 添加招募信息
	 * 
	 * @param recruit
	 * @return
	 * @throws SQLException
	 */
	public int addRecruit(Recruit recruit) throws SQLException;

	/**
	 * 删除招募信息
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	public int deleteRecruit(int id) throws SQLException;

	/**
	 * 批量删除招募信息
	 * 
	 * @param recruit
	 * @return
	 * @throws SQLException
	 */
	public int deleteAllRecruit(String[] ids) throws SQLException;

	/**
	 * 修改招募信息
	 * 
	 * @param recruit
	 * @return
	 * @throws SQLException
	 */
	public int updateRecruit(Recruit recruit) throws SQLException;

	/**
	 * 通过id查找招募信息
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	public Recruit findByIdRecruit(int id) throws SQLException;

	/**
	 * 查询招募信息
	 * 
	 * @param
	 * @return
	 * @throws SQLException
	 */
	public List<Recruit> findAllRecruit() throws SQLException;

	/**
	 * 查询招募信息的总条数
	 * 
	 * @return
	 * @throws SQLException
	 */
	public int countRecruit() throws SQLException;
}
