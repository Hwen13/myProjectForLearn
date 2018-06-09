/**
 * 
 */
package com.zqkc.controller;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.zqkc.model.Banner;
import com.zqkc.model.Bannerfile;
import com.zqkc.service.IBannerService;
import com.zqkc.service.IBannerfileService;
import com.zqkc.util.FileUploadUtils;

/**
 * @author zch
 *
 */
@Controller
@RequestMapping("/banner")
public class BannerController {

	@Autowired
	private IBannerService bannerService;

	@Autowired
	private IBannerfileService bannerfileService;

	public void setBannerService(IBannerService bannerService) {
		this.bannerService = bannerService;
	}

	public void setBannerfileService(IBannerfileService bannerfileService) {
		this.bannerfileService = bannerfileService;
	}

	/************************ 轮播相关页面跳转 ****************************************/

	/**
	 * 进入轮播图列表页面
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/toBanner")
	public ModelAndView toBannerfile(HttpSession session) throws Exception {
		ModelAndView md = new ModelAndView();
		md.addObject("banner", bannerService.doFindBannerAll());
		md.setViewName("carousel_list");
		return md;
	}

	/**
	 * 进入添加轮播图页面
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addBanner")
	public String addBannerfile(HttpSession session) throws Exception {
		return "carousel_add";
	}

	/**
	 * 跳转更新轮播页面
	 * 
	 * @param session
	 * @param banner
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateBanner")
	public ModelAndView updateBanner(HttpSession session, Banner banner) throws Exception {
		ModelAndView md = new ModelAndView();
		md.addObject("banner", banner);
		md.setViewName("carousel_update");
		return md;
	}

	/**
	 * 根据传过来的轮播id查找pid=id的轮播图
	 * 
	 * @param session
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/showBanner")
	public ModelAndView showBanner(HttpServletRequest request, Bannerfile bf) throws Exception {
		ModelAndView md = new ModelAndView();
		int pid = bf.getPid();
		LinkedList<Bannerfile> link = bannerfileService.doFindBannerfile(bf);
		List<String> test = new ArrayList<String>();
		for (Bannerfile b : link) {
			test.add(b.getPath().substring(b.getPath().indexOf("publics")));
		}
		md.addObject("pid", pid);
		md.addObject("bannerfiles", test);
		md.setViewName("carousel_show");
		return md;
	}

	/**
	 * 跳转到添加轮播图片页面
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addBannerfile")
	public String addBannerfile(HttpServletRequest request) throws Exception {
		request.setAttribute("pid", Integer.parseInt(request.getParameter("pid")));
		return "addbannerfile";
	}

	/************************ 轮播相关页面业务处理 ****************************************/

	/**
	 * 更新轮播图页面操作
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/doUpdateBanner")
	public ModelAndView doUpdateBanner(HttpServletRequest request, Banner ban,
			@RequestParam(value = "file", required = false) MultipartFile[] files) throws Exception {
		ModelAndView md = new ModelAndView();
		if (bannerService.doUpdateBanner(ban)) {

			for (int i = 0; i < files.length; i++) {
				if (!files[i].isEmpty()) {
					Bannerfile bf = FileUploadUtils.upload(request, files[i]);// 保存图片到服务器
					bf.setPid(ban.getId());
					bannerfileService.doAddBannerfile(bf); // 数据库保存图片
				}
			}
			md.setViewName("redirect:toBanner");
		} else {

			md.addObject("banner", ban);
			md.setViewName("carousel_update");
		}
		return md;
	}

	/**
	 * 添加轮播图
	 * 
	 * @param request
	 * @param files
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/doAddBannerfile")
	public String doAddBannerfile(HttpServletRequest request,
			@RequestParam(value = "file", required = false) MultipartFile[] files) throws Exception {
		int pid = Integer.parseInt(request.getParameter("pid"));

		for (int i = 0; i < files.length; i++) {
			if (!files[i].isEmpty()) {
				Bannerfile bf = FileUploadUtils.upload(request, files[i]);// 保存图片到服务器
				bf.setPid(pid);
				bannerfileService.doAddBannerfile(bf); // 数据库保存图片
			}
		}

		return "redirect:toBanner";
	}

	/**
	 * 添加轮播数据处理操作
	 * 
	 * @param session
	 * @param ban
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/doAddBanner", method = RequestMethod.POST)
	public ModelAndView doAddBanner(Banner ban, HttpServletRequest request,
			@RequestParam(value = "file", required = false) MultipartFile[] files) throws Exception {

		ModelAndView md = new ModelAndView();
		// 上传轮播内容
		if (bannerService.doAddBanner(ban)) {
			md.setViewName("redirect:toBanner");
		} else {
			md.setViewName("carousel_add");
		}
		int pid = bannerService.findBannerId(ban); // 获得刚上传轮播的文件编号ID 作为轮播图的PID
		// 做上传图片操作
		for (int i = 0; i < files.length; i++) {
			if (!files[i].isEmpty()) {
				Bannerfile bf = FileUploadUtils.upload(request, files[i]);// 保存图片到服务器
				bf.setPid(pid);
				bannerfileService.doAddBannerfile(bf); // 数据库保存图片
			}
		}
		return md;
	}

	/**
	 * 删除轮播数据操作
	 * 
	 * @param session
	 * @param ban
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/doDeleteBanner")
	public String doDeleteBanner(HttpSession session, Banner ban) throws Exception {
		Bannerfile bf = new Bannerfile();
		bf.setPid(ban.getId());
		bannerService.doDeleteBanner(ban);// 删除轮播
		bannerfileService.doDeleteBannerfile(bf); // 删除轮播的所有相关图片
		return "redirect:toBanner";
	}

	/**
	 * 删除轮播数据操作
	 * 
	 * @param session
	 * @param ban
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/doDeleteBannerfile")
	public String doDeleteBannerile(HttpSession session, Bannerfile bf) throws Exception {
		Bannerfile ban = new Bannerfile();
		String path = bf.getPath();
		ban.setFilename((path.substring(path.indexOf("upload") + 7)));
		bannerfileService.doDeleteBannerfile(ban);
		return "redirect:toBanner";
	}

	/**
	 * 批量删除操作
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/deleteList")
	public String doDeleteMultiBanner(HttpServletRequest request) throws Exception {
		String items = request.getParameter("delitems");
		String[] ids = items.split(",");
		bannerService.doDeleteMultiBanner(ids);
		// 删除轮播图片
		for (String id : ids) {
			Bannerfile bf = new Bannerfile();
			bf.setPid(Integer.parseInt(id));
			bannerfileService.doDeleteBannerfile(bf);
		}
		return "redirect:toBanner";
	}
}
