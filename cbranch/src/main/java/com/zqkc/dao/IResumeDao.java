package com.zqkc.dao;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.zqkc.model.Resume;

/**
 * 持久层简历
 * 
 * @author saddy
 *
 */
@Repository
public interface IResumeDao {
	/**
	 * 添加简历
	 * 
	 * @param resume
	 * @return
	 * @throws SQLException
	 */
	public int addResume(Resume resume) throws SQLException;

	/**
	 * 删除简历
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	public int deleteResume(int id) throws SQLException;

	/**
	 * 修改简历
	 * 
	 * @param resume
	 * @return
	 * @throws SQLException
	 */
	public int updateResume(Resume resume) throws SQLException;

	/**
	 * 通过id查询简历
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	public Resume findByIdResume(int id) throws SQLException;

	/**
	 * 查询所有简历
	 * 
	 * @param resume
	 * @return
	 * @throws SQLException
	 */
	public List<Resume> findAllResume(Resume resume) throws SQLException;

}
