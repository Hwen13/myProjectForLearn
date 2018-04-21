package com.zqkc.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.zqkc.model.Business;
import com.zqkc.model.Customer;
import com.zqkc.model.Images;
import com.zqkc.service.IBusinessService;
import com.zqkc.service.IImagesService;
import com.zqkc.util.FileUploadUtils;

@Controller
@RequestMapping("/business")
public class BusinessController {

	@Autowired // 自动注入business
	private IBusinessService businessService;

	public void setBusinessService(IBusinessService businessService) {
		this.businessService = businessService;
	}

	@Autowired // 自动注入images
	private IImagesService imagesService;

	public void setImagesService(IImagesService imagesService) {
		this.imagesService = imagesService;
	}

	/**
	 * 平台展示列表
	 * 
	 * @param business
	 * @param session
	 * @param req
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/list")
	public ModelAndView list(HttpSession session, HttpServletRequest req) throws Exception {

		ModelAndView md = new ModelAndView();
		List<Business> list = businessService.doFindBusinessAll();
		if (null != list) {
			md.addObject("list", list);
			md.setViewName("platform_list");
		}
		return md;
	}

	/**
	 * 添加平台展示
	 * 
	 * @param business
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/add")
	public ModelAndView addBusiness(HttpServletRequest request, Business business,
			@RequestParam(value = "filename", required = false) MultipartFile[] files) throws Exception {

		ModelAndView md = new ModelAndView();
		Business bus = new Business();
		bus.setPower(business.getPower());
		bus.setDescription(business.getDescription());
		bus.setTitle(business.getTitle());
		// 把图片地址保存到business表的预留字段中
		for (int i = 0; i < files.length; i++) {
			if (!files[i].isEmpty()) {
				System.out.println("保存图片到服务器和数据库中" + files[i].getOriginalFilename());
				String str = FileUploadUtils.upload2(request, files[i]);// 保存图片到服务器
				bus.setRemark(str);
			}
		}
		boolean n = businessService.doAddBusiness(bus);
		if (n) {
			md.setViewName("redirect:list");
		} else {
			md.setViewName("platform_add");
		}
		System.out.println(business.toString());
		int pid = businessService.doFindBusinessById(business);
		System.out.println(pid);
		// 做上传图片操作
		for (int i = 0; i < files.length; i++) {
			if (!files[i].isEmpty()) {
				System.out.println("保存图片到服务器和数据库中" + files[i].getOriginalFilename());
				Images im = FileUploadUtils.upload1(request, files[i]);// 保存图片到服务器
				im.setPid(pid);
				imagesService.doAddImages(im); // 数据库保存图片
			}
		}
		return md;
	}

	/**
	 * 更改平台展示
	 * 
	 * @param business
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/update")
	public ModelAndView updateBusiness(Business business) throws Exception {

		ModelAndView md = new ModelAndView();
		Business bus = new Business();
		bus.setId(business.getId());
		bus.setTitle(business.getTitle());
		bus.setPower(business.getPower());
		bus.setDescription(business.getDescription());
		boolean n = businessService.doUpdateBusiness(bus);
		if (n) {
			md.setViewName("redirect:list");
		} else {
			md.setViewName("platform_update");
		}
		return md;
	}

	/**
	 * 删除平台展示
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/delete")
	public ModelAndView deleteBusiness(Business business) throws Exception {

		ModelAndView md = new ModelAndView();
		boolean n = businessService.doDeleteBusiness(business.getId());
		if (n) {
			md.setViewName("redirect:list");
		}
		return md;
	}

	/**
	 * 批量删除
	 * 
	 * @param req
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/deleteList", method = RequestMethod.POST)
	public ModelAndView deleteBusinessList(String delitems) throws Exception {

		ModelAndView md = new ModelAndView();
		String[] ids = delitems.split(",");

		List<Integer> li = new ArrayList<Integer>();
		for (int i = 0; i < ids.length; i++) {
			li.add(Integer.parseInt(ids[i]));
		}
		System.out.println(li);
		try {
			boolean m = businessService.doDeleteBusinessList(li);
			if (m) {
				md.setViewName("redirect:list");
			} else {
				md.setViewName("index");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return md;
	}

	/**
	 * 进入添加页面
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/save")
	public String save() throws Exception {

		return "platform_add";
	}

	/**
	 * 进入修改页面
	 * 
	 * @param business
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/change")
	public ModelAndView change(Business business) throws Exception {
		ModelAndView md = new ModelAndView();
		md.addObject("bus", business.getId());
		md.setViewName("platform_update");
		return md;
	}
}
