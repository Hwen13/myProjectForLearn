package com.zqkc.service.impl;

import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zqkc.dao.IimagesDao;
import com.zqkc.model.Business;
import com.zqkc.model.Images;
import com.zqkc.service.IImagesService;

/**
 * 业务图片 Service层实现
 * 
 * @author 夏日炎炎
 *
 */
@Service
public class ImagesService implements IImagesService {

	private Logger log = Logger.getLogger(Logger.class);
	@Autowired
	private IimagesDao imagesDao;

	public void setImagesDao(IimagesDao imagesDao) {
		this.imagesDao = imagesDao;
	}

	/**
	 * 添加业务图片
	 * 
	 * @param images
	 * @return
	 * @throws Exception
	 */
	@Override
	public boolean doAddImages(Images images) throws Exception {
		if (null != images) {
			try {
				int n = imagesDao.addImages(images);
				return n > 0 ? true : false;
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	/**
	 * 删除业务图片
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	@Override
	public boolean doDeleteImages(int id) throws Exception {
		// TODO Auto-generated method stub
		return false;
	}

	/**
	 * 批量删除业务图片
	 * 
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@Override
	public boolean doDeleteImagesList(List<Integer> list) throws Exception {
		// TODO Auto-generated method stub
		return false;
	}

	/**
	 * 更新业务图片
	 * 
	 * @param images
	 * @return
	 * @throws Exception
	 */
	@Override
	public boolean doUpdateImages(Images images) throws Exception {
		// TODO Auto-generated method stub
		return false;
	}

	/**
	 * 根据business的id查找图片地址
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	@Override
	public String doFindImagesById(Business bus) throws Exception {
		if (null != bus) {
			try {
				String str = imagesDao.findByIdImages(bus);
				System.out.println("hgjdhkhi" + str);
				if (null != str) {
					return str;
				}
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return null;
	}

	/**
	 * 查询所有业务图片
	 * 
	 * @return
	 * @throws Exception
	 */
	@Override
	public Set<Images> doFindImages() throws Exception {
		try {
			Set<Images> im = imagesDao.findAllImages();
			if (null != im) {
				return im;
			}
		} catch (Exception e) {
			log.debug(e.toString());
			e.printStackTrace();
		}
		return null;
	}

}
