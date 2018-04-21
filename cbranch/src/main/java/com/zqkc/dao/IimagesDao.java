package com.zqkc.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Repository;

import com.zqkc.model.Business;
import com.zqkc.model.Images;

/**
 * 业务图片持久层接口类
 * 
 * @author Administrator
 *
 */
@Repository
public interface IimagesDao {
	/**
	 * 添加业务图片
	 * 
	 * @param images
	 * @return
	 * @throws SQLException
	 */
	public int addImages(Images images) throws SQLException;

	/**
	 * 删除业务图片
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	public int deleteImages(int id) throws SQLException;

	/**
	 * 修改业务图片
	 * 
	 * @param images
	 * @return
	 * @throws SQLException
	 */
	public int updateImages(Images images) throws SQLException;

	/**
	 * 根据business的id查找图片地址
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	public String findByIdImages(Business bus) throws SQLException;

	/**
	 * 查找所有业务图片
	 * 
	 * @return
	 * @throws SQLException
	 */
	public Set<Images> findAllImages() throws SQLException;

	/**
	 * 批量删除业务图片
	 * 
	 * @param list
	 * @return
	 * @throws Exception
	 */
	public int deleteImagesList(List<Images> list) throws Exception;

	/**
	 * 统计业务图片数量
	 */
	public int getImages() throws Exception;
}
