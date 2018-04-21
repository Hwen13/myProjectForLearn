package com.zqkc.service.impl;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zqkc.dao.IRecruitDao;
import com.zqkc.model.Recruit;
import com.zqkc.service.IRecruitService;

/**
 * 招募服务层实现类
 * 
 * @author saddy
 *
 */
@Service
public class RecruitService implements IRecruitService {
	@Autowired
	protected IRecruitDao recruitDao;

	public void setRecruitDao(IRecruitDao recruitDao) { // 通过set注入超找dao层里面的方法
		this.recruitDao = recruitDao;
	}

	@Override
	/**
	 * 添加招募信息，成功返回true
	 */
	public boolean doAddRecruit(Recruit recruit) throws Exception {
		if (recruit != null) {
			try {
				int n = recruitDao.addRecruit(recruit);
				return n > 0 ? true : false;

			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return false;
	}

	/**
	 * 通过id删除招募信息
	 */
	public boolean doDeleteRecruit(int id) throws Exception {
		Recruit rec = new Recruit();
		if (rec != null) {
			try {
				int n = recruitDao.deleteRecruit(id);
				return n > 0 ? true : false;
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return false;
	}

	@Override
	public boolean doDeleteAllRecruit(String[] ids) throws SQLException {
		if (ids != null) {
			int n = recruitDao.deleteAllRecruit(ids);
			return n > 0 ? true : false;
		}

		return false;
	}

	/**
	 * 修改招募信息
	 */
	public boolean doUpdateRecruit(Recruit recruit) throws Exception {
		if (recruit != null) {
			try {
				int n = recruitDao.updateRecruit(recruit);
				return n > 0 ? true : false;
			} catch (SQLException e) {
				e.printStackTrace();
			}

		}
		return false;
	}

	/**
	 * 通过id查找招募信息
	 */
	@Override
	public Recruit doFindByIdRecruit(int id) throws Exception {
		Recruit rec = new Recruit();
		if (rec != null) {
			try {
				rec = recruitDao.findByIdRecruit(id);

			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return rec;
	}

	/**
	 * 查找所有招募信息
	 */
	@Override
	public List<Recruit> doFindAllRecruit() throws Exception {

		List<Recruit> list = recruitDao.findAllRecruit();
		return list;
	}

	/**
	 * 查找所有招募信息条说
	 */
	@Override
	public int countRecruit() throws Exception {
		int n = recruitDao.countRecruit();
		return n;
	}

}
