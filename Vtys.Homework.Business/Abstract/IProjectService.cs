﻿using Vtys.Core.Business.Abstract;
using Vtys.Core.Results;
using Vtys.Homework.Entities.Concrete;

namespace Vtys.Homework.Business.Abstract
{
    public interface IProjectService : IService
    {
        IResult GetAll();
        IResult GetById(long id);
        IResult Save(Project project);
        IResult DeleteById(long id);
    }
}
