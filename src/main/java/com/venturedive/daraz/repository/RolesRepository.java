package com.venturedive.daraz.repository;

import com.venturedive.daraz.domain.Roles;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Roles entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RolesRepository extends JpaRepository<Roles, Long>, JpaSpecificationExecutor<Roles> {}
