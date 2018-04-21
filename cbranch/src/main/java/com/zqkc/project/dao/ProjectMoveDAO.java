package com.zqkc.project.dao;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public interface ProjectMoveDAO {

	@WebMethod
	public String selectProject(String account) throws Exception;
	
	@WebMethod
	
	public boolean deleteProjectAccount(String account,String pcw) throws Exception;
}
