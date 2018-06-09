/**
 * 
 */
package com.zqkc.service.impl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zqkc.dao.INavigationDao;
import com.zqkc.model.Navigation;
import com.zqkc.service.INavigationService;

/**
 * @author zch
 *
 */
@Service
public class NavigationService implements INavigationService {

	private Logger log = Logger.getLogger(Logger.class);

	@Autowired
	private INavigationDao navigationDao;

	public void setNavigationDao(INavigationDao navigationDao) {
		this.navigationDao = navigationDao;
	}

	@Override
	public boolean doAddNavigation(Navigation nav) {
		if (null != nav) {

			try {
				return navigationDao.addNavigation(nav) > 0 ? true : false;
			} catch (SQLException e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
	public boolean doDeleteNavigation(Navigation nav) {
		if (null != nav) {
			try {
				return navigationDao.deleteNavigation(nav) > 0 ? true : false;
			} catch (SQLException e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
	public LinkedList<Navigation> doFindNavigation(Navigation nav) {
		List<Navigation> list = null;

		try {
			if (null != nav) {

				list = navigationDao.findNavigation(nav);
			} else {
				list = navigationDao.findNavigationAll();
			}
			LinkedList<Navigation> linked = new LinkedList<Navigation>();
			for (Navigation n : list) {
				linked.add(n);
			}
			return linked;
		} catch (SQLException e) {
			log.debug(e.toString());
			e.printStackTrace();
		}

		return null;
	}

	@Override
	public boolean doUpdateNavigation(Navigation nav) {
		if (null != nav) {
			try {
				return navigationDao.updateNavigation(nav) > 0 ? true : false;
			} catch (SQLException e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
	public LinkedList<Navigation> doFindNavigationAll() {

		try {
			List<Navigation> list = navigationDao.findNavigationAll();
			LinkedList<Navigation> link = new LinkedList<Navigation>();
			for (Navigation n : list) {
				link.add(n);
			}
			return link;

		} catch (SQLException e) {
			log.debug(e.toString());
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public boolean doDeleteMultiNavigation(String[] ids) {
		try {
			List<Integer> list = new ArrayList<Integer>();
			for (String id : ids) {
				list.add(Integer.parseInt(id));
			}
			return navigationDao.deleteMultiNavigation(list) > 0 ? true : false;
		} catch (SQLException e) {
			log.debug(e.toString());
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public int countNavigation() {
		int n = 0;
		try {
			n = navigationDao.getNavigations();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return n;
	}

	public static LinkedList<Navigation> sort(LinkedList<Navigation> link) {
		LinkedList<Navigation> list = new LinkedList<Navigation>();
		for (int i = 0; i < link.size(); i++) {
			for (int j = 0; j < link.size(); j++) {

			}
		}

		return null;
	}

}
