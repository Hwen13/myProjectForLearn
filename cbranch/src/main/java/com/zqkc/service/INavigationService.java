/**
 * 
 */
package com.zqkc.service;

import java.util.LinkedList;

import com.zqkc.model.Navigation;

/**
 * @author zch Service层 导航 接口
 * 
 */
public interface INavigationService {

	/**
	 * 添加导航
	 * 
	 * @param nav
	 * @return
	 */
	public boolean doAddNavigation(Navigation nav);

	/**
	 * 删除导航
	 * 
	 * @param nav
	 * @return
	 */
	public boolean doDeleteNavigation(Navigation nav);

	/**
	 * 批量删除导航
	 * 
	 * @param nav
	 * @return
	 */
	public boolean doDeleteMultiNavigation(String[] ids);

	/**
	 * 更新导航
	 * 
	 * @param nav
	 * @return
	 */
	public boolean doUpdateNavigation(Navigation nav);

	/**
	 * 查询导航
	 * 
	 * @param nav
	 * @return
	 */
	public LinkedList<Navigation> doFindNavigation(Navigation nav);

	/**
	 * 查询所有导航
	 * 
	 * @param nav
	 * @return
	 */
	public LinkedList<Navigation> doFindNavigationAll();

	/**
	 * 统计导航总数
	 * 
	 * @return
	 */
	public int countNavigation();

}
