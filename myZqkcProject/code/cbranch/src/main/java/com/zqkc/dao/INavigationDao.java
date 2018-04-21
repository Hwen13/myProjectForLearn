/**
 * 
 */
package com.zqkc.dao;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.zqkc.model.Navigation;

/**
 * 
 * @author zch 持久层 导航 接口
 *
 */
@Repository
public interface INavigationDao {
	
	/**
	 * 添加导航
	 * @throws SQLException
	 */
	
	public int addNavigation(Navigation nav) throws SQLException;
	/**
	 * 删除导航
	 * @throws SQLException
	 */
	public int deleteNavigation(Navigation nav) throws SQLException;
	
	/**
	 * 更新导航
	 * @param nav
	 * @return
	 * @throws SQLException
	 */
	public int updateNavigation(Navigation nav) throws SQLException;
	/**
	 * 查询导航.
	 * @throws SQLException
	 */
	public List<Navigation> findNavigation(Navigation nav) throws SQLException;
	/**
	 * 查询所有导航.
	 * @throws SQLException
	 */
	public List<Navigation> findNavigationAll() throws SQLException;
	
	
}
