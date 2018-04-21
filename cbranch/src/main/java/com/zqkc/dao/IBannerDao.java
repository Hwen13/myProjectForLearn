/**
 * 
 */
package com.zqkc.dao;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.zqkc.model.Banner;

/**
 * @author zch 持久层 轮播
 *
 */
@Repository
public interface IBannerDao {

	/**
	 * 添加轮播
	 * 
	 * @param ban
	 * @return
	 * @throws SQLException
	 */
	public int addBanner(Banner ban) throws SQLException;

	/**
	 * 删除轮播
	 * 
	 * @param ban
	 * @return
	 * @throws SQLException
	 */
	public int deleteBanner(Banner ban) throws SQLException;

	/**
	 * 批量删除轮播
	 * 
	 * @param ban
	 * @return
	 * @throws SQLException
	 */
	public int deleteMultiBanner(List<Integer> list) throws SQLException;

	/**
	 * 更新轮播
	 * 
	 * @param ban
	 * @return
	 * @throws SQLException
	 */
	public int updateBanner(Banner ban) throws SQLException;

	/**
	 * 查询轮播
	 * 
	 * @param ban
	 * @return
	 * @throws SQLException
	 */
	public List<Banner> findBanner(Banner ban) throws SQLException;

	/**
	 * 查询所有轮播
	 * 
	 * @param ban
	 * @return
	 * @throws SQLException
	 */
	public List<Banner> findBannerAll() throws SQLException;

	/**
	 * 查找轮播编号
	 * 
	 * @param ban
	 * @return
	 * @throws SQLException
	 */
	public int findBannerId(Banner ban) throws SQLException;

	/**
	 * 统计轮播图数量
	 * 
	 * @return
	 */
	public int getBanners();
}
