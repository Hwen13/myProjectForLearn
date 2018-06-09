package com.zqkc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zqkc.model.Resume;

/**
 * 服务层的实现类
 * 
 * @author saddy
 * 
 */
@Service
public interface IResumeService {
	/**
	 * 添加简历
	 * 
	 * @param resume
	 * @return
	 */
	public boolean doAddResume(Resume resume) throws Exception;

	/**
	 * 删除简历
	 * 
	 * @param id
	 * @return
	 */
	public boolean doDeleteResume(int id) throws Exception;

	/**
	 * 修改简历
	 * 
	 * @param resume
	 * @return
	 */
	public boolean doUpdateResume(Resume resume) throws Exception;

	/**
	 * 通过id查找简历
	 * 
	 * @param id
	 * @return
	 */
	public Resume doFindByIdResume(int id) throws Exception;

	/**
	 * 查找所有简历
	 * 
	 * @param resume
	 * @return
	 */
	public List<Resume> doFindAllResume(Resume resume) throws Exception;

}
