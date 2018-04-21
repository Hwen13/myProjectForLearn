package com.zqkc.service;

import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.zqkc.model.Business;
import com.zqkc.model.Images;

/**
 * 业务图片 Service接口
 * 
 * @author 夏日炎炎
 *
 */
@Service
public interface IImagesService {
	/**
	 * 添加业务图片
	 * 
	 * @param images
	 * @return
	 * @throws Exception
	 */
	public boolean doAddImages(Images images) throws Exception;

	/**
	 * 删除业务图片
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public boolean doDeleteImages(int id) throws Exception;

	/**
	 * 批量删除业务图片
	 * 
	 * @param list
	 * @return
	 * @throws Exception
	 */
	public boolean doDeleteImagesList(List<Integer> list) throws Exception;

	/**
	 * 更新业务图片
	 * 
	 * @param images
	 * @return
	 * @throws Exception
	 */
	public boolean doUpdateImages(Images images) throws Exception;

	/**
	 * 根据business的id查找图片地址
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public String doFindImagesById(Business bus) throws Exception;

	/**
	 * 查询所有业务图片
	 * 
	 * @return
	 * @throws Exception
	 */
	public Set<Images> doFindImages() throws Exception;
}
