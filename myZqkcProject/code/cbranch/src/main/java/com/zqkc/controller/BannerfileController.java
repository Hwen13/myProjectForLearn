/**
 * 
 */
package com.zqkc.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


import com.zqkc.service.impl.BannerfileService;

/**
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/bannerfile")
public class BannerfileController {
	
	@Autowired
	public BannerfileService bannerfileService;
	
	public void setBannerfileService(BannerfileService bannerfileService) {
		this.bannerfileService = bannerfileService;
	}
	
	
	
	
	
	
}
