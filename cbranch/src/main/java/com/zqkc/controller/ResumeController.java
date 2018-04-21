package com.zqkc.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.zqkc.model.Resume;
import com.zqkc.service.IResumeService;

@Controller
@RequestMapping("/resume")
public class ResumeController {
	@Autowired
	protected IResumeService resumeService;

	public void setResumeService(IResumeService resumeService) { // 通过set注入查找service层的方法
		this.resumeService = resumeService;
	}

	@RequestMapping("/addResume")
	public ModelAndView addResume(HttpSession session, Resume resume) throws Exception {
		ModelAndView mv = new ModelAndView();

		if (resumeService.doAddResume(resume)) {
			mv.addObject("addMessage", "添加信息成功。");
			mv.setViewName("resume_add");
		} else {
			mv.addObject("addMessage", "添加信息失败！！！");
			mv.setViewName("error");
		}
		return mv;
	}

	@RequestMapping("/deleteResume")
	public ModelAndView deleteResume(HttpSession session, int id) throws Exception {
		ModelAndView mv = new ModelAndView();
		boolean flag = resumeService.doDeleteResume(id);
		if (flag) {
			mv.addObject("success", "success to add.");
			mv.setViewName("");
		} else {
			mv.addObject("error", "error to add.");
			mv.setViewName("");
		}
		return mv;
	}

	@RequestMapping("/updateResume")
	public ModelAndView updateResume(HttpSession session, Resume resume) throws Exception {
		ModelAndView mv = new ModelAndView();
		boolean flag = resumeService.doUpdateResume(resume);
		if (flag) {
			mv.addObject("success", "success to add.");
			mv.setViewName("");
		} else {
			mv.addObject("error", "error to add.");
			mv.setViewName("");
		}
		return mv;
	}

	@RequestMapping("/findByIdResume")
	public ModelAndView findByIdResume(HttpSession session, int id) throws Exception {
		ModelAndView mv = new ModelAndView();
		Resume res = new Resume();
		res = resumeService.doFindByIdResume(id);
		if (res != null) {
			mv.addObject("success", "success to add.");
			mv.setViewName("");
		} else {
			mv.addObject("error", "error to add.");
			mv.setViewName("");
		}

		return mv;
	}

	@RequestMapping("/findAllResume")
	public ModelAndView findAllResume(HttpSession session, Resume resume) throws Exception {
		ModelAndView mv = new ModelAndView();
		List<Resume> list = resumeService.doFindAllResume(resume);
		if (list != null) {
			mv.addObject("success", "success to add.");
			mv.setViewName("");
		} else {
			mv.addObject("error", "error to add.");
			mv.setViewName("");
		}
		return mv;
	}
}
