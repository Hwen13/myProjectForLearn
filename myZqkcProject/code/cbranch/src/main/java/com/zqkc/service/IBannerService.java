/**
 * 
 */
package com.zqkc.service;

import java.util.LinkedList;

import com.zqkc.model.Banner;



/**
 * @author zch Service 轮播 接口
 *
 */
public interface IBannerService {
	
	/**
	 * 添加轮播
	 * @param ban
	 * @return
	 */
	public boolean doAddBanner(Banner ban);
	/**
	 * 删除轮播
	 * @param ban
	 * @return
	 */
	public boolean doDeleteBanner(Banner ban);
	/**
	 * 更新轮播
	 * @param ban
	 * @return
	 */
	public boolean doUpdateBanner(Banner ban);
	/**
	 * 查询轮播
	 * @param ban
	 * @return
	 */
	public LinkedList<Banner> doFindBanner(Banner ban);

	/**
	 * 查询所有轮播
	 * @param ban
	 * @return
	 */
	public LinkedList<Banner> doFindBannerAll();
	/**
	 * 统计轮播数量
	 * @return
	 */
	public int countBanners();

}
