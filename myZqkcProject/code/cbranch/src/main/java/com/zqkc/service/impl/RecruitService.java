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

	@Override
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
	public boolean doDeleteAllRecruit(Recruit recruit) throws Exception {
		if (recruit != null) {
			try {
				int n = recruitDao.deleteAllRecruit(recruit);
				return n > 0 ? true : false;
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
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

	@Override
	public List<Recruit> doFindAllRecruit() throws Exception {
		
			try {
				List<Recruit> list = recruitDao.findAllRecruit();
				return list;
			} catch (SQLException e) {
				e.printStackTrace();
			}
		
		return null;
	}

}
