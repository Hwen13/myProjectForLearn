package com.zqkc.service.impl;

import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zqkc.dao.IBannerDao;
import com.zqkc.model.Banner;
import com.zqkc.service.IBannerService;

/**
 * @author zch Service层  轮播 实现类
 *
 */
@Service
public class BannerService implements IBannerService{

	private Logger log = Logger.getLogger(Logger.class);
	
	@Autowired
	private IBannerDao bannerDao;
	
	public void setBannerDao(IBannerDao bannerDao) {
		this.bannerDao = bannerDao;
	}
	
	
	@Override
	public boolean doAddBanner(Banner ban) {                              
		try {
			return bannerDao.addBanner(ban)>0?true:false;
			
		} catch (SQLException e) {
			log.debug(e.toString());
			e.printStackTrace();
		}	
		return false;
		
		
	}

	@Override
	public boolean doDeleteBanner(Banner ban) {
		
		try {
			return bannerDao.deleteBanner(ban)>0?true:false;
		} catch (SQLException e) {
			log.debug(e.toString());
			e.printStackTrace();
		}
		
		return false;
	}

	@Override
	public LinkedList<Banner> doFindBanner(Banner ban) {
		List<Banner> list = null;
			try {
				//如果数据不为空，则查找对应的类型轮播，数据为空则查找所有数据；
				if(null!=ban){
					list = bannerDao.findBanner(ban); 
				}else{
					list = bannerDao.findBannerAll();
				}				
				LinkedList<Banner> link = new LinkedList<Banner>(); 
				for(Banner b:list){
					link.add(b);
				}
					return link;
			} catch (SQLException e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		return null;
	}

	@Override
	public boolean doUpdateBanner(Banner ban) {
		
		if(null!=null){
			try {
				return bannerDao.updateBanner(ban)>0?true:false;
			} catch (SQLException e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		
		return false;
	}

	/**
	 * 获取轮播数量
	 */
	@Override
	public int countBanners() {	
		return bannerDao.getBanners();
	}


	@Override
	public LinkedList<Banner> doFindBannerAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
