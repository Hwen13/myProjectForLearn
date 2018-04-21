/**
 * 
 */
package com.zqkc.dao;

import java.sql.SQLException;
import java.util.LinkedList;

import org.springframework.stereotype.Repository;

import com.zqkc.model.Bannerfile;

/**
 * @author zch 持久层 轮播图
 *
 */
@Repository
public interface IBannerfileDao {
	
	/**
	 * 查询轮播图编号
	 * @param bf
	 * @return
	 * @throws SQLException
	 */
	public int findBannerfilId(Bannerfile bf)throws SQLException;
	/**
	 * 添加轮播图片
	 * @param bf
	 * @throws SQLException
	 */
	public int addBannerfile(Bannerfile bf) throws SQLException;
	/**
	 * 删除轮播图片
	 * @param bf
	 * @return
	 * @throws SQLException
	 */
	public int deleteBannerfile(Bannerfile bf) throws SQLException;
	/**
	 * 修改轮播图片
	 * @param bf
	 * @return
	 * @throws SQLException
	 */
	public int updateBannerfile(Bannerfile bf) throws SQLException;
	/**
	 * 查询轮播图
	 * @param bf
	 * @return
	 * @throws SQLException
	 */
	public LinkedList<Bannerfile> findBannerfile(Bannerfile bf) throws SQLException;
	/**
	 * 查询所有轮播图
	 * @param bf
	 * @return
	 * @throws SQLException
	 */
	public LinkedList<Bannerfile> findBannerfileAll() throws SQLException;
	
	
}
