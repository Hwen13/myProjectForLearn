/**
 * 
 */
package com.zqkc.service;

import java.sql.SQLException;
import java.util.LinkedList;

import org.springframework.stereotype.Component;

import com.zqkc.model.Bannerfile;

/**
 * @author zch Service 轮播图接口
 *
 */
@Component
public interface IBannerfileService {
	
		/**
		 * 添加轮播图片
		 * @param bf
		 * @throws SQLException
		 */
		public boolean doAddBannerfile(Bannerfile bf) ;
		/**
		 * 删除轮播图片
		 * @param bf
		 * @return
		 * @throws SQLException
		 */
		public boolean doDeleteBannerfile(Bannerfile bf) ;
		/**
		 * 修改轮播图片
		 * @param bf
		 * @return
		 * @throws SQLException
		 */
		public boolean doUpdateBannerfile(Bannerfile bf) ;
		/**
		 * 查询轮播图
		 * @param bf
		 * @return
		 * @throws SQLException
		 */
		public LinkedList<Bannerfile> doFindBannerfile(Bannerfile bf);
		
		/**
		 * 查询所有轮播图
		 * @param bf
		 * @return
		 * @throws SQLException
		 */
		public LinkedList<Bannerfile> doFindBannerfileAll();
		
	

	
}
