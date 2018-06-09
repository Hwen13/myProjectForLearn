package com.zqkc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zqkc.model.Recruit;

/**
 * 
 * 服务层
 * 
 * @author saddy
 * 
 */
@Service
public interface IRecruitService {
	/**
	 * 添加招募信息
	 * 
	 * @param recruit
	 * @return
	 */
	public boolean doAddRecruit(Recruit recruit) throws Exception;

	/**
	 * 通过id删除招募信息
	 * 
	 * @param id
	 * @return
	 */
	public boolean doDeleteRecruit(int id) throws Exception;

	/**
	 * 删除所有招募信息
	 * 
	 * @param recruit
	 * @return
	 */
	public boolean doDeleteAllRecruit(String[] ids) throws Exception;

	/**
	 * 修改招募信息
	 * 
	 * @return
	 */
	public boolean doUpdateRecruit(Recruit recruit) throws Exception;

	/**
	 * 通过id查找招募信息
	 * 
	 * @return
	 */
	public Recruit doFindByIdRecruit(int id) throws Exception;

	/**
	 * 查找所有招募信息
	 * 
	 * @return
	 */
	public List<Recruit> doFindAllRecruit() throws Exception;

	/**
	 * 查询招募信息总条数
	 * 
	 * @return
	 * @throws Exception
	 */
	public int countRecruit() throws Exception;
}
