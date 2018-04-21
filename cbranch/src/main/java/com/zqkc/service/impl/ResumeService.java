package com.zqkc.service.impl;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zqkc.dao.IResumeDao;
import com.zqkc.model.Resume;
import com.zqkc.service.IResumeService;

/**
 * 简历服务层实现类
 * 
 * @author Administrator
 *
 */
@Service
public class ResumeService implements IResumeService {
	@Autowired
	protected IResumeDao resumeDao;

	public void setResumeDao(IResumeDao resumeDao) { // 通过set注入查找dao层的方法
		this.resumeDao = resumeDao;
	}

	@Override
	public boolean doAddResume(Resume resume) throws Exception {
		if (resume != null) {
			try {
				int n = resumeDao.addResume(resume);
				return n > 0 ? true : false;
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
	public boolean doDeleteResume(int id) throws Exception {
		Resume res = new Resume();
		if (res != null) {
			try {
				int n = resumeDao.deleteResume(id);
				return n > 0 ? true : false;
			} catch (SQLException e) {
				e.printStackTrace();
			}

		}
		return false;
	}

	@Override
	public boolean doUpdateResume(Resume resume) throws Exception {
		if (resume != null) {
			int n;
			try {
				n = resumeDao.updateResume(resume);
				return n > 0 ? true : false;
			} catch (SQLException e) {
				e.printStackTrace();
			}

		}
		return false;
	}

	@Override
	public Resume doFindByIdResume(int id) throws Exception {
		Resume res = new Resume();
		if (res != null) {
			try {
				res = resumeDao.findByIdResume(id);
				return res;
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return null;
	}

	@Override
	public List<Resume> doFindAllResume(Resume resume) throws Exception {
		if (resume != null) {
			try {
				List<Resume> list = resumeDao.findAllResume(resume);
				return list;
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return null;
	}

}
